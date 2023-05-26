"use client";

import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { Container, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import userData from "../data/data";
import SvgIcons from "./SvgIcons";

const Footer = () => {
  const { colorMode}  = useColorMode();
  // console.log(colorMode)

  return (
    <footer>
      <Container maxW="6xl">
        <Flex justifyContent="center">
          <Stack direction="row">
            {userData.footer.icons.map((icon, index) => (
              <Link as={NextLink} key={index} href={icon.url} target="_blank">
                <SvgIcons fill={colorMode === "light" ? icon.fill : icon.dark || icon.fill } d={icon.svg} viewBox={icon.viewBox} />
              </Link>
            ))}
          </Stack>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
