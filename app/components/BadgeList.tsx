"use client";

import { Badge, Flex } from "@chakra-ui/react";
import React from "react";

interface BadgeListProps {
  badges: string[];
}


// from chakra-ui
// Pass the colorScheme prop to customize the color of the Badge. colorScheme can be any color key that exists in theme.colors
const BadgeList: React.FC<BadgeListProps> = ({ badges }) => {
  const badgeColors: Record<string, string> = {
    React: "teal",
    Nextjs: "gray",
    JavaScript: "orange",
    TypeScript: "blue",
    SCSS: "red",
    Php: "purple",
    WordPress: "teal",
    Html: "cyan",
    Css: "pink",
    Python: "blue",
    GSAP: "green",
    MUI: "purple",
    Chartjs: "pink",
    ChakraUI: "yellow",
  };

  return (
    <Flex gap="2" wrap="wrap">
      {badges.map((badge, index) => (
        <Badge key={index} colorScheme={badgeColors[badge] || "red"}>
          {badge}
        </Badge>
      ))}
    </Flex>
  );
};

export default BadgeList;
