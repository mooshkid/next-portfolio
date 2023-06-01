"use client";

import { DownloadIcon, ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";


interface MyButtonProps {
  buttons?: {
    text: string;
    link?: string;
    icon?: ReactNode;
  }[];
}

const MyButtons = ({ buttons }: MyButtonProps) => {

  const iconChakra = {
    download: <DownloadIcon />,
    external: <ExternalLinkIcon />,
  }

  if (!buttons) {
    return null; // Return null if buttons prop is undefined
  }
  return (
    <Stack direction="row" spacing="4">
      {buttons.map((item, index) => {
        if (item.link) {
          return (
            <Link
              as={NextLink}
              key={index}
              href={item.link}
              isExternal
              boxShadow="0 0 5px #f9cb28"
              p="5px 10px"
              borderRadius="5px"
              border="1px"
              borderColor="#ff4d4d"
              _hover={{
                boxShadow: "0 0 15px #f9cb28",
              }}
              _dark={{
                borderColor: "white",
                boxShadow: "0 0 5px rgba(0, 124, 240, 1)",
                _hover: {
                  boxShadow: "0 0 15px rgba(0, 124, 240, 1)",
                }
              }}
            >
              <Flex gap="2" alignItems="center">
                {item.text}
                {item.icon && iconChakra[item.icon] || <LinkIcon />}
              </Flex>
            </Link>
          );
        }

        return null; // skip rendering the link if item.link is not defined
      })}
    </Stack>
  );
};

export default MyButtons;
