'use client';

import { Box, Heading } from '@chakra-ui/react'
import React from 'react'


type IntroProps = {
  title: string;
}

const Intro: React.FC<IntroProps> = ({title}) => {
  return (
    <Box py="8" borderBottom="1px" borderColor="gray.300" _dark={{borderColor: "gray.800"}}>
      <Heading as="h1" size="3xl">{title}</Heading>
    </Box>
  )
}

export default Intro