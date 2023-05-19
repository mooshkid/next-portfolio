'use client';

import { Box, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'





const data = [
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
  {title: 'My Portfolio', desc: 'some description for my portfolio', url: 'https://mooshkid.github.io/', img: '/lc+_watch.png'},
]

function ProjectList() {
  return (
    <>
      {data.map((item, index) => (
        <Flex key={index} width="50%" direction="column">
          <Box position="relative" width="100%" height="100%">
            <Image src={item.img} alt={item.title} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto"}}/>
          </Box>
          <Box>
            <Heading as="h3">{item.title}</Heading>
            <Text>{item.desc}</Text>
            <Link href={item.url}>Learn more</Link>
          </Box>
        </Flex>
      ))}
    </>
  );
}




const Projects = () => {
  return (
    <main>
      <Container maxW="6xl" mx="auto">
        <Box py="8" borderBottom="1px" borderColor={useColorModeValue("#ff4d4d", "gray.800")}>
          <Heading as="h1" size="3xl">Projects</Heading>
        </Box>
        <Box py="12" >
          <Flex flexWrap="wrap">
            <ProjectList />
          </Flex>
        </Box>
      </Container>
    </main>
  )
}

export default Projects