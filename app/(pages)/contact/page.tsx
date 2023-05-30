'use client';

import Intro from '@/app/components/Intro';
import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import userData from '@/app/data/data';



const Contact = () => {
  return (
    <main>
      <Container maxW="6xl" mx="auto">
        <Intro title={userData.contact.title} />
        <Box py="12" >
          <Text>{userData.contact.description}</Text>
        </Box>
      </Container>
    </main>
  )
}

export default Contact