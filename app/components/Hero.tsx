'use client';

import React from "react";
import Image from "next/image";
import { Container, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// import Link from "next/link";
import { Link } from "@chakra-ui/next-js";

const Hero = () => {
  return (
    <Container maxW={"7xl"} mx={"auto"}>
      <Stack id="hero" minH={{ md: "70vh"}} justify={"center"}>
        <Flex align={"center"} justify={"center"} mx={"auto"} direction={{ base: "column", md: "row" }}>
          <Flex flex={1} order={{ base:"1", md: "2"}}>
            <Image
              src={"https://mooshkid.github.io/assets/slark_icon.png"}
              alt="hero image"
              width={500}
              height={300}
            />
          </Flex>
          <Stack flex={1} spacing={6} w={"full"} maxW={"lg"} order={{ base:"2", md: "1"}}>
            <Heading as="h1" size="3xl">
              Hi, I&apos;m{" "}
              <Text as="span" bgGradient={useColorModeValue("linear(to-l, #ff4d4d, #f9cb29)", "linear(to-l, #007cf0, #00dfd8)")} bgClip="text">
                Masa
              </Text>
            </Heading>
            <Text fontSize="3xl">Front-end Developer</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Stack direction="row" spacing="4">

              {/* make this part a map  */}
              <Link href="" boxShadow={useColorModeValue("0 0 5px #f9cb28", "0 0 5px #007cf0")} p="5px 10px" borderRadius="5px" border="1px" borderColor={useColorModeValue("#ff4d4d", "white")}>Resume</Link>
              <Link href="https://github.com/mooshkid/" target="_blank" boxShadow={useColorModeValue("0 0 5px #f9cb28", "0 0 5px #007cf0")} p="5px 10px" borderRadius="5px" border="1px" borderColor={useColorModeValue("#ff4d4d", "white")}>
                GitHub
              </Link>
              <Link href="" boxShadow={useColorModeValue("0 0 5px #f9cb28", "0 0 5px #007cf0")} p="5px 10px" borderRadius="5px" border="1px" borderColor={useColorModeValue("#ff4d4d", "white")}>
                Coffee
              </Link>
              {/* map to here  */}

            </Stack>
          </Stack>

        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
