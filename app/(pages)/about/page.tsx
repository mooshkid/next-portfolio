"use client";

import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import userData from "../../data/data";

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
      </Container>
    </main>
  );
};

export default about;
