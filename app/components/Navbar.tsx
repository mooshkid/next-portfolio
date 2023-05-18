'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={4}>
      <Flex justify={"space-between"} alignItems={"center"}>
        <Box>
          <Link href={"/"}>
            <Image
              src={"https://mooshkid.github.io/assets/slark_icon.png"}
              width={"60"}
              height={"60"}
              alt={"logo"}
            />
          </Link>
        </Box>
        <Flex className="nav_list" gap="4">
          <Link p="5px 10px" href={"/about"}>About</Link>
          <Link p="5px 10px" href={"/projects"}>Projects</Link>
          <Link p="5px 10px" href={"/contact"}>Contact</Link>
        </Flex>
        <ButtonGroup>
          {/* <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button> */}
          <Button className="theme_button" onClick={toggleColorMode} mr={2}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default NavBar;
