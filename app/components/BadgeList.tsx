"use client";

import { Badge, Flex } from "@chakra-ui/react";
import React from 'react'


interface BadgeListProps {
  badges: string[];
}

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
