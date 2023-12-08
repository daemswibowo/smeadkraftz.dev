import { fetchPageBlocks, fetchPages } from "../data/notionAdapter";
import BaseResponse from "@/common/baseResponse";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { IMenu } from "../entities/menu";

export default async function getMenuBySlug(
  slug: string
): Promise<BaseResponse<IMenu | undefined>> {
  try {
    const { results } = await fetchPages(
      process.env.NOTION_MENUS_DATABASE_ID as string,
      {
        filter: {
          property: "Status",
          status: {
            equals: "Published",
          },
          and: [
            {
              property: "Slug",
              rich_text: {
                equals: slug,
              },
            },
          ],
        },
      }
    );

    const result = results[0] as PageObjectResponse | undefined;

    let data: IMenu | undefined = result
      ? {
          id: result.id,
          // @ts-ignore
          name: result.properties["Name"].title[0].plain_text,
          // @ts-ignore
          slug: result.properties["Slug"].rich_text[0].plain_text,
          // @ts-ignore
          description: result.properties["Description"].rich_text[0].plain_text,
          imageUrl:
            // @ts-ignore
            result && result?.cover ? result?.cover?.external?.url : null,
        }
      : undefined;

    // fetch blocks
    if (data) {
      const blocks = await fetchPageBlocks(data.id);

      data.blocks = blocks;
    }

    console.info("getMenuBySlug:", slug, data);

    return {
      data: data,
      error: null,
    };
  } catch (e: unknown) {
    console.warn("Failed to get menu by name:", e);
    return {
      data: null,
      error: e,
    };
  }
}
