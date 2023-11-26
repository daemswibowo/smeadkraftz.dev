import Head from "next/head";
import BaseLayout from "@/layouts/baseLayout";
import HelloSection from "@/components/organisms/home/helloSection";
import { Button, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Introduce from "@/components/molecules/introduce";

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack spacing={4}>
          {/* Start hello */}
          <HelloSection />
          <Introduce />
          {/* End hello */}
        </Stack>
      </main>
    </BaseLayout>
  );
}
