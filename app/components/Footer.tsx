'use client';

import React from 'react'
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { Container, Flex, Stack, Text } from '@chakra-ui/react'
import userData from '../data/data';

const Footer = () => {
  return (
    <footer>
      <Container maxW="6xl">
        <Flex justifyContent="center">
          <Stack direction="row">
            {userData.footer.icons.map((icon, index) => (
              <Link as={NextLink} key={index} href={icon.url} target="_blank">
                {icon.alt}
              </Link>
            ))}
          </Stack>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer