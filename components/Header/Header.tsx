import Image from "next/image";
import React, { FC } from "react";
import Logo from "./Logo";

const Header: FC = () => {
  return (
    <div className="flex md:hidden h-[45px] bg-[#fff] fixed top-0 left-0 right-0 items-center justify-between pl-3 pr-3 border-b-[1px] border-[#ccc] z-[1000]">
      <Logo />
      <div className="flex items-center gap-3">
        <Image src="/add-post.svg" alt="add-post" width="24" height="24" />
        <Image src="/like-outline.svg" alt="add-post" width="24" height="24" />
      </div>
    </div>
  );
};

export default Header;
