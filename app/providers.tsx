// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';


// color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// dark theme styles
const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.900', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props),
    },
  }),
};

const theme = extendTheme({ config, styles })


export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    // why doesn't my theme work with the CacheProvider?
    // <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    // </CacheProvider>
  )
}