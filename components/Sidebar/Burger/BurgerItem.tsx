import Link from 'next/link';
import React, { FC } from 'react';
interface IBurgerItem {
  Tag: React.ElementType;
  title: string;
  href?: string;
}

const BurgerItem: FC<IBurgerItem> = ({Tag, title, href}) => {
  return (
    <Tag className="cursor-pointer p-2 bg-[#fff] hover:bg-[#efefef] whitespace-nowrap overflow-hidden ease-linear duration-200" href={Tag === Link ? `${href}` : ""}>
      <span>{title}</span>
    </Tag>
  );
};

export default BurgerItem;