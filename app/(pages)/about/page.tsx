"use client";

import React from "react";
import { Badge, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import userData from "../../data/data";



// badges
const Badges = () => {
  return (
    <Flex gap="2" wrap="wrap">
    {userData.about.skills?.map((badge, index) => {
      return (
        <Badge key={index} colorScheme={badge.color}>
          {badge.text}
        </Badge>
      )
    })}
    </Flex>
  )
}



const about = () => {
  return (
    <main>
      <Container maxW="6xl">
        <Heading as="h1">{userData.about.title}</Heading>
        <Box>
          {userData.about.description?.map((eachLine, index) => {
            return <Text key={index}>{eachLine}</Text>;
          })}
        </Box>
        <Badges />
      </Container>
    </main>
  );
};

export default about;
