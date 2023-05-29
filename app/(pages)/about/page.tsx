"use client";

import React from "react";
import { Badge, Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import userData from '@/app/data/data';
import Intro from "@/app/components/Intro";



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
        <Intro title={userData.about.title} />
        <Stack direction="column" spacing="8" py="8">
            {userData.about.description?.map((eachLine, index) => {
              return <Text key={index}>{eachLine}</Text>;
            })}
          <Badges />
        </Stack>
      </Container>
    </main>
  );
};

export default about;
