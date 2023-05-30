"use client"; // does this go here? or should i move the generateStaticParams???

import { notFound } from "next/navigation";
import projectData from "@/app/data/data";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import BadgeList from "@/app/components/BadgeList";


const projects = projectData.projects.projects;

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

  const { title, desc, url, badges } = project;

  return (
    <>
      <main>
        <Container maxW="6xl" mx="auto">
          <Stack direction="column" spacing="4">
            <Heading as="h1">{title}</Heading>
            <Text color="blackAlpha.600" _dark={{ color: "whiteAlpha.600" }}>{desc}</Text>
            <BadgeList badges={badges} />
            <Link as={NextLink} href={url} p="2px 4px" color="#de1d8d">
              web
              <ExternalLinkIcon ml="2" />
            </Link>
          </Stack>
        </Container>
      </main>
    </>
  );
}
