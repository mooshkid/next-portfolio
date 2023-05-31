"use client";

import { Flex, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const MyButton = ({ text, icon, link, external }) => {
  return (
    <Link
      as={NextLink}
      href={link}
      target={external ? "_blank" : undefined}
      locale={false}
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
        {text}
        {icon}
      </Flex>
    </Link>
  );
};

export default MyButton;
