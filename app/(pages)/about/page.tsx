"use client";

import React from "react";
import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import userData from '@/app/data/data';
import Intro from "@/app/components/Intro";
import BadgeList from "@/app/components/BadgeList";


const about = () => {
  return (
    <main>
      <Container maxW="6xl">
        <Intro title={userData.about.title} />
        <Stack direction="column" spacing="8" py="8">
            {userData.about.description?.map((eachLine, index) => {
              return <Text key={index}>{eachLine}</Text>;
            })}
          <BadgeList badges={userData.about.skills} />
        </Stack>
      </Container>
    </main>
  );
};

export default about;
