"use client";

import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import MyButtons from "./MyButtons";



const buttons = [
  {
    text: "GitHub",
    link: "https://github.com/mooshkid/",
    icon: <ExternalLinkIcon />,
  },
  {
    text: "Resume",
    link: "/Masa_Resume.pdf",
    icon: <DownloadIcon />,
  }
];


const Hero = () => {
  return (
    <Container maxW={"7xl"} mx={"auto"}>
      <Stack id="hero" minH={{ md: "70vh" }} justify={"center"} mb="8">
        <Flex
          align={"center"}
          justify={"center"}
          mx={"auto"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex={1} order={{ base: "1", md: "2" }}>
            <Image
              src="https://mooshkid.github.io/assets/slark_icon.png"
              alt="hero image"
              width={500} // is this even working? check later
              height={300}
            />
          </Flex>
          <Stack flex={1} spacing={6} w={"full"} maxW={"lg"} order={{ base: "2", md: "1" }}>
            <Heading as="h1" size="3xl">
              Hi, I&apos;m{" "}
              <Text
                as="span"
                bgGradient={useColorModeValue(
                  "linear(to-l, #ff4d4d, #f9cb29)",
                  "linear(to-l, #007cf0, #00dfd8)"
                )}
                bgClip="text"
              >
                Masa
              </Text>
            </Heading>
            <Text fontSize="2xl">Front-end Developer</Text>
            <Stack direction="row" spacing="4">
              {/* <MyButton text={buttons[0].text} link={buttons[0].link} icon={buttons[0].icon} external={buttons[0].external} />
              <MyButton text={buttons[1].text} link={buttons[1].link} icon={buttons[1].icon} external={buttons[1].external} /> */}
              <MyButtons buttons={buttons} />
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
