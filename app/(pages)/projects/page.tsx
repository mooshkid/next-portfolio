'use client';

import ProjectsList from '@/app/components/ProjectsList';
import { Box, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'




const Projects = () => {
  return (
    <main>
      <Container maxW="6xl" mx="auto">
        <Box py="8" borderBottom="1px" borderColor={useColorModeValue("gray.300", "gray.800")}>
          <Heading as="h1" size="3xl">Projects</Heading>
        </Box>
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