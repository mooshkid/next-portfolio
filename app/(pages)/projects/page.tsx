'use client';


import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const projects = () => {
  return (
    
    <main>
      <Container maxW="6xl" mx="auto">
        <Box py="8">
          <Heading as="h1" size="3xl">Projects</Heading>
        </Box>
      </Container>
    </main>

  )
}

export default projects