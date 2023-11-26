import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import AppContainer from "../../atoms/appContainer";

export default function NavigationHeader() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "whiteAlpha.100" : "blackAlpha.100"}
      w="100%"
      position="fixed"
      as="nav"
      style={{ backdropFilter: "blur(4px)" }}
      zIndex={1}
      px={4}
    >
      <AppContainer>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack alignItems={"start"} spacing={4} direction={"row"}>
            <Box>
              <Text fontFamily={"heading"} fontWeight={"extrabold"}>
                DIMAS WIBOWO
              </Text>
            </Box>
            <Box>Logo</Box>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </AppContainer>
    </Box>
  );
}
