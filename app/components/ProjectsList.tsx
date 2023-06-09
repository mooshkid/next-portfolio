"use client";

import { Box, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import userData from "../data/data";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            _dark={{ borderColor: "gray.800", boxShadow: "0 25px 50px -12px rgba(255, 0, 255, 0.25)" }}
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
              <Text color="blackAlpha.600" _dark={{ color: "whiteAlpha.600" }} noOfLines={2}>
                {item.desc}
              </Text>
              <Link
                as={NextLink}
                href={`/projects/${item.slug}`}
                // isExternal
                maxW="fit-content"
                p="2px 4px"
                color="rgb(228, 65, 172)"
                _hover={{ color: "rgb(222, 29, 141)"}}
                _dark={{
                  color: "rgb(222, 29, 141)",
                  _hover: {
                    color: "rgb(228, 65, 172)"
                  }
                }}
              >
                Learn more
                <ChevronRightIcon ml="1" />
              </Link>
            </Stack>
          </Flex>
        </Box>
      ))}
    </>
  );
}

export default ProjectsList;
