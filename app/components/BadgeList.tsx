"use client";

import { Badge, Flex } from "@chakra-ui/react";
import React from 'react'


interface BadgeListProps {
  badges: string[];
}

const BadgeList: React.FC<BadgeListProps> = ({ badges }) => {
  const badgeColors: Record<string, string> = {
    React: "teal.200",
    Nextjs: "gray.800",
    JavaScript: "orange.200",
    TypeScript: "blue.500",
    SCSS: "red.400",
    Php: "purple.200",
    WordPress: "teal.500",
    Html: "cyan.400",
    Css: "pink.300",
    Python: "blue.700",
    Figma: "yellow.300",
  };

  return (
    <Flex gap="2" wrap="wrap">
      {badges.map((badge, index) => (
        <Badge key={index} colorScheme={badgeColors[badge] || "red.500"}>
          {badge}
        </Badge>
      ))}
    </Flex>
  );
};

export default BadgeList;
