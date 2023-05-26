import React, { FC } from 'react';

interface SvgIconsProps {
  fill: string;
  d: string;
  viewBox: string;
}

const SvgIcons: FC<SvgIconsProps> = ({ fill, d, viewBox }) => {
  return (
    <svg width="auto" height="32" viewBox={viewBox}>
      <path fill={fill} d={d}></path>
    </svg>
  )
};

export default SvgIcons;
