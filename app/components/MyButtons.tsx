"use client";

import { LinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const MyButtons = ({ buttons }) => {
  if (!buttons) {
    return null; // Return null if buttons prop is undefined
  }
  return (
    <Stack direction="row" spacing="4">
      {buttons.map((item, index) => {
        if (item.link) {
          return (
            <Link
              as={NextLink}
              key={index}
              href={item.link}
              isExternal
              boxShadow={useColorModeValue("0 0 5px #f9cb28", "0 0 5px #007cf0")}
              p="5px 10px"
              borderRadius="5px"
              border="1px"
              borderColor={useColorModeValue("#ff4d4d", "white")}
              _hover={{
                boxShadow: useColorModeValue("0 0 15px #f9cb28", "0 0 15px #007cf0"),
              }}
            >
              <Flex gap="2" alignItems="center">
                {item.text}
                {item.icon || <LinkIcon />}
              </Flex>
            </Link>
          );
        }

        return null; // skip rendering the link if item.link is not defined
      })}
    </Stack>
  );
};

export default MyButtons;
