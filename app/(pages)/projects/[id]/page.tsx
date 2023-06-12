"use client"; // does this go here? or should i move the generateStaticParams???

import BadgeList from "@/app/components/BadgeList";
import MyButtons from "@/app/components/MyButtons";
import ProjectSlider from "@/app/components/ProjectSlider";
import userData from "@/app/data/data";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";

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

  const { title, desc, badges, buttons, screenshots } = project; // just defactoring for simplicity

  return (
    <>
      <main>
        <Container maxW="6xl" mx="auto">
          <Stack direction="column" spacing="8" pb="12">
            <Heading as="h1">{title}</Heading>
            <Text color="blackAlpha.800" _dark={{ color: "whiteAlpha.800" }}>
              {desc}
            </Text>
            <BadgeList badges={badges} />
            <MyButtons buttons={buttons} />
            <Box width={{ md: "70%" }}>
              {screenshots && ( // only show if there are screenshots
                <>
                  <Text as="h2" size="3xl" fontWeight="700" mb="4">
                    Screenshots
                  </Text>
                  <ProjectSlider sliders={screenshots} />
                </>
              )}
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  );
}
