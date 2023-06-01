"use client"; // does this go here? or should i move the generateStaticParams???

import { notFound } from "next/navigation";
import userData from "@/app/data/data";
import { Container, Heading, Stack, Text, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import BadgeList from "@/app/components/BadgeList";
import Image from "next/image";
import MyButtons from "@/app/components/MyButtons";

const projects = userData.projects.projects;

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const project = projects.find((project) => project.slug === id);

  if (!project) {
    notFound();
  }

  const { title, desc, url, badges, img, buttons} = project;

  // const buttons = [
  //   { text: "webbb", link: "https://github.com/"},
  //   { text: "webbb", link: "https://github.com/"},
  //   { text: "webbb", link: "https://github.com/"}
  // ]
  
  return (
    <>
      <main>
        <Container maxW="6xl" mx="auto">
          <Stack direction="column" spacing="8">
            <Heading as="h1" mt="8">{title}</Heading>
            <Text color="blackAlpha.800" _dark={{ color: "whiteAlpha.800" }}>
              {desc}
            </Text>
            <BadgeList badges={badges} />
            <MyButtons buttons={buttons} />
            {/* <Link as={NextLink} href={url} p="2px 4px" color="#de1d8d" isExternal>
              web
              <ExternalLinkIcon ml="2" />
            </Link> */}
            <Box
              position="relative"
              width={{ md: "50%" }}
              height={"100%"}
              border="1px"
              borderRadius="5px"
              borderColor="gray.300"
              boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              _dark={{
                borderColor: "gray.800",
                boxShadow: "0 25px 50px -12px rgba(255, 0, 255, 0.25)",
              }}
              shadow="2xl"
              overflow="hidden"
            >
              <Image
                src={img}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  );
}
