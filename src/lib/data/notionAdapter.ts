import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = (
  databaseId: string,
  query?: Omit<QueryDatabaseParameters, "database_id">
): Promise<QueryDatabaseResponse> => {
  return notion.databases.query({
    database_id: databaseId,
    ...query,
  });
};

export const fetchPageBySlug = async (
  databaseId: string,
  slug: string
): Promise<PageObjectResponse | undefined> => {
  console.log("fetchPageBySlug", databaseId, slug);
  const result = notion.databases
    .query({
      database_id: databaseId,
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
    })
    .then((res) => {
      return res.results[0] as PageObjectResponse | undefined;
    });

  return result;
};

export const fetchPageBlocks = (pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
};

export default notion;
