import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface IMenuLink {
  img: string | IconType;
  title: string;
  href: string;
}

const MenuLink: FC<IMenuLink> = ({ img, title, href }) => {
  return (
    <Link className="w-[100%] md:justify-center min-[1100px]:justify-start menu-item flex items-center gap-3 p-0 min-[1100px]:p-3 hover:bg-[#f3f3f3] rounded-[20px]" href={href}>
      {img &&
        React.createElement(img, { className: "menu-item-img", style: { width: "24px", height: "24px" } })}
      <span className="text-[16px] text-[#262626] hidden min-[1100px]:flex">{title}</span>
    </Link>
  );
};

export default MenuLink;
