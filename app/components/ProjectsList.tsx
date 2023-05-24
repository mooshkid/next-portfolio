"use client";

import { Box, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import userData from "../data/data";

function ProjectsList() {

  const { projects } = userData.projects;
  
  return (
    <>
      {projects.map((item, index) => (
        <Box key={index} width={{ base:"100%", md: "50%"}} p="4">
          <Flex
            direction="column"
            border="1px"
            borderRadius="5px"
            borderColor="gray.300"
            _dark={{ borderColor: "gray.800" }}
            shadow="2xl"
            overflow="hidden"
          >
            <Box position="relative" width="100%" height="100%">
              <Image
                src={item.img}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Stack direction="column" spacing="4" p="4">
              <Heading as="h3">{item.title}</Heading>
              <Text color="blackAlpha.600" _dark={{ color: "whiteAlpha.600" }}>
                {item.desc}
              </Text>
              <Link
                as={NextLink}
                href={item.url}
                isExternal
                color="#de1d8d"
                _hover={{ textDecoration: "none", color: "white" }}
                maxW="fit-content"
                p="2px 4px"
              >
                Learn more
              </Link>
            </Stack>
          </Flex>
        </Box>
      ))}
    </>
  );
}

export default ProjectsList;
