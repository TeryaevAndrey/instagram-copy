import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import SidebarBurger from "./Burger/SidebarBurger";
import Menu from "./Menu/Menu";

const Sidebar: FC = () => {
  return (
    <div className="sidebar fixed left-0 top-[auto] md:top-0 bottom-0 min-w-[100%] h-[50px] md:h-[100%] bg-[#fff] py-4 px-4 md:min-w-[auto] max-w-[78px] min-[1100px]:min-w-[240px] xl:max-w-[20%] w-[100%] z-[1000]">
      <Link
        className="hidden md:flex justify-center mb-10 min-[1100px]:ml-3 min-[1100px]:mb-0 mt-4 min-[1100px]:mt-0 min-[1100px]:justify-start"
        href="/"
      >
        <Image
          className="hidden min-[1100px]:block"
          src="/instaIcon.svg"
          alt="instagram"
          width="110"
          height="40"
        />
        <Image
          className="flex justify-center min-[1100px]:hidden"
          src="/insta-icon-small.svg"
          alt="instagram"
          width="24"
          height="24"
        />
      </Link>
      <Menu />
      <SidebarBurger />
    </div>
  );
};

export default Sidebar;
