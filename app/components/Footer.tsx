"use client";

import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { Container, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import userData from "../data/data";
import SvgIcons from "./SvgIcons";

const Footer = () => {
  const { colorMode } = useColorMode();
  // console.log(colorMode);

  // get the current year
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container maxW='6xl' py='8'>
        <Stack direction='column' spacing='4'>
          <Flex justifyContent='center'>
            <Stack direction='row' spacing='4'>
              {userData.footer.icons.map((icon, index) => (
                <Link as={NextLink} key={index} href={icon.url} target='_blank'>
                  <SvgIcons fill={colorMode === "light" ? icon.fill : icon.dark || icon.fill} d={icon.svg} viewBox={icon.viewBox} />
                </Link>
              ))}
            </Stack>
          </Flex>
          <Flex justifyContent='center'>
            <Text>
              © <Text as='span'>{year}</Text> mooshkid
            </Text>
          </Flex>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
