"use client";

import BadgeList from "@/app/components/BadgeList";
import Intro from "@/app/components/Intro";
import userData from "@/app/data/data";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const about = () => {
  return (
    <main>
      <Container maxW="6xl">
        <Intro title={userData.about.title} />
        <Box py="12">
          <Flex direction={{ base: "column", lg: "row" }} gap="8" align="center">
            <Stack flex="1" align="center">
              <Box
                borderRadius="50%"
                overflow="hidden"
                maxW="200px"
                borderColor="gray.300"
                boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                _dark={{
                  borderColor: "gray.800",
                  boxShadow: "0 25px 50px -12px rgba(255, 0, 255, 0.25)",
                }}
                shadow="2xl"
              >
                <Image
                  src="/masa.png"
                  alt="a"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Text as="h3" size="2xl">Masayuki Yamanaka</Text>
              <Text color="blackAlpha.500" _dark={{ color: "whiteAlpha.600" }}>#1 Dad & gamer</Text>
            </Stack>
            <Stack direction="column" spacing="8" py="8" flex={{ base: "1", lg: "2" }}>
              {userData.about.description?.map((eachLine, index) => {
                return <Text key={index}>{eachLine}</Text>;
              })}
              <BadgeList badges={userData.about.skills} />
            </Stack>
          </Flex>
        </Box>
      </Container>
    </main>
  );
};

export default about;
