'use client';

import Intro from '@/app/components/Intro';
import ProjectsList from '@/app/components/ProjectsList';
import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import userData from '@/app/data/data';



const Projects = () => {
  return (
    <main>
      <Container maxW="6xl" mx="auto">
        <Intro title={userData.projects.title} />
        <Box py="12" >
          <Flex flexWrap="wrap">
            <ProjectsList />
          </Flex>
        </Box>
      </Container>
    </main>
  )
}

export default Projects