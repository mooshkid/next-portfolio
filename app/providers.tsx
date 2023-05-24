// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Dark theme styles
const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("gray.900", "whiteAlpha.900")(props),
        bg: mode("white", "black")(props),
      },
    }),
  },
  shadows: {
    "2xl": "1px 1px 1px 3px rgba(159, 122, 234, 0.6)",
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

// const theme = extendTheme({ config, styles })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // why doesn't my theme work with the CacheProvider?
    // <CacheProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </CacheProvider>
  );
}
