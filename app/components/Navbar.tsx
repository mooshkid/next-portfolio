'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


type Page = {
  name: string;
  path: string;
};

const routes: Page[] = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Pages = () => {
  return (
    <>
      {routes.map((item, index) => (
        <Link as={NextLink} key={index} href={item.path} _hover={{ textDecoration: "none"}}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py="4" maxW="7xl" mx="auto">
      <Flex justify="space-between" alignItems="center">
        <Box>
          <Link href="/">
            <Image
              src="https://mooshkid.github.io/assets/slark_icon.png"
              width="60"
              height="60"
              alt="logo"
            />
          </Link>
        </Box>
        <Flex className="nav_list" gap="4">
          <Pages />
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
