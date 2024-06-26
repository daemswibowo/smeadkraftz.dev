import AppContainer from "@/components/atoms/appContainer";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page Not Found",
  openGraph: {
    images: ["https://webowo.dev/images/card-2.png"],
  },
};

export default function NotFoundPage() {
  return (
    <AppContainer pt={24} minH={"85vh"} textAlign={"center"}>
      <Box h={"100%"} flex={1} alignItems={"center"} justifyItems={"center"}>
        <Heading as="h1">404</Heading>
        <Text>Page Not Found</Text>
      </Box>
    </AppContainer>
  );
}
