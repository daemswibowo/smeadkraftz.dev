import BaseLayout from "@/layouts/baseLayout";
import HelloSection from "@/components/organisms/home/helloSection";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import Introduce from "@/components/molecules/introduce";
import AppContainer from "@/components/atoms/appContainer";
import ContentWithTitle from "@/components/molecules/contentWithTitle";
import { SocialIcon } from "react-social-icons";
import { GetServerSideProps } from "next";
import { IMenus } from "@/lib/entities/menu";
import fetchCommonData from "@/lib/usecases/fetchCommonData";
import Head from "next/head";

export const getServerSideProps = (async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const { menus } = await fetchCommonData();
  return {
    props: {
      menus: menus || [],
    },
  };
}) satisfies GetServerSideProps<{
  menus: IMenus;
}>;

export default function Home() {
  return (
    <BaseLayout description="Full stack developer">
      <Head>
        <title>Home - Dimas Wibowo</title>
      </Head>
      <main>
        <AppContainer pt={24} pb={12}>
          <Stack spacing={6}>
            {/* Start hello */}
            <Introduce />
            <HelloSection />
            {/* End hello */}

            {/* Start about section */}
            <ContentWithTitle title={"About"}>
              <Text>
                Currently working as VP of Engineering at{" "}
                <Link
                  href="https://karyakarsa.com"
                  color={"red.500"}
                  fontWeight={"bold"}
                  target={"_blank"}
                >
                  KaryaKarsa
                </Link>{" "}
                with over 8 years of experience as Software Engineer, and I
                really enjoy bringing ideas to life through responsive web
                applications and mobile apps. My toolkit includes React,
                Node.js, Supabase, Flutter and many more – the ingredients for
                some pretty cool digital experiences.
              </Text>
            </ContentWithTitle>
            {/* End about section */}

            {/* Start bio */}
            <ContentWithTitle title={"Bio"}>
              <Stack spacing={1}>
                <Stack direction={"row"}>
                  <Box maxW={"60px"} minW={"60px"}>
                    <Text fontWeight={"bold"}>1994</Text>
                  </Box>
                  <Text>Born in Jakarta, Indonesia 🇮🇩</Text>
                </Stack>
                <Stack direction={"row"}>
                  <Box maxW={"60px"} minW={"60px"}>
                    <Text fontWeight={"bold"}>2012</Text>
                  </Box>
                  <Text>
                    Graduated from vocational high school majoring in software
                    engineering
                  </Text>
                </Stack>
                <Stack direction={"row"}>
                  <Box maxW={"60px"} minW={"60px"}>
                    <Text fontWeight={"bold"}>2012</Text>
                  </Box>
                  <Text>
                    Start journey as a full stack developer freelancer in
                    Gorontalo, Indonesia
                  </Text>
                </Stack>
                <Stack direction={"row"}>
                  <Box maxW={"60px"} minW={"60px"}>
                    <Text fontWeight={"bold"}>2019</Text>
                  </Box>
                  <Text>
                    Worked at{" "}
                    <Link
                      href="https://ritase.com"
                      target="_blank"
                      color={"green.500"}
                      fontWeight={"bold"}
                    >
                      Ritase.com
                    </Link>
                    , Indonesia
                  </Text>
                </Stack>
                <Stack direction={"row"}>
                  <Box maxW={"60px"} minW={"60px"}>
                    <Text fontWeight={"bold"}>2020-Present</Text>
                  </Box>
                  <Text>
                    Working at{" "}
                    <Link
                      href="https://karyakarsa.com"
                      color={"red.500"}
                      fontWeight={"bold"}
                      target={"_blank"}
                    >
                      KaryaKarsa
                    </Link>
                    , Indonesia
                  </Text>
                </Stack>
              </Stack>
            </ContentWithTitle>
            {/* End bio */}

            {/* Start Links */}
            <ContentWithTitle title="Let's Connect!">
              <Stack direction={"row"}>
                <SocialIcon
                  url="https://www.linkedin.com/in/dimaswibowo"
                  target="_blank"
                />
                <SocialIcon
                  url="https://github.com/daemswibowo"
                  target="_blank"
                />
                <SocialIcon url="https://x.com/daemswibowo" target="_blank" />
                <SocialIcon
                  url="https://instagram.com/daemswibowo"
                  target="_blank"
                />
              </Stack>
            </ContentWithTitle>
            {/* End bio */}
          </Stack>
        </AppContainer>
      </main>
    </BaseLayout>
  );
}
