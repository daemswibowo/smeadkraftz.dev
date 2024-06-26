"use client";

import theme from "@/common/theme";
import { IMenus } from "@/lib/entities/menu";
import BaseProvider from "@/providers/baseProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import ReactLenis from "lenis/react";

export function Providers({
  children,
  menus,
}: {
  children: React.ReactNode;
  menus?: IMenus;
}) {
  return (
    <ReactLenis root>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode={"wait"} initial={true}>
          <BaseProvider menus={menus}>{children}</BaseProvider>
        </AnimatePresence>
      </ChakraProvider>
    </ReactLenis>
  );
}
