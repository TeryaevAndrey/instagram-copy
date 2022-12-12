import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import SidebarBurger from './Burger/SidebarBurger';
import Menu from './Menu/Menu';

const Sidebar: FC = () => {
  return (
    <div className="sidebar fixed left-0 top-0 bottom-0 bg-[#fff] py-4 px-4 min-w-[240px] max-w-[20%] w-[100%]">
      <Link href="/">
        <Image src="/instaIcon.svg" alt="instagram" width="110" height="40" />
      </Link>
      <Menu />
      <SidebarBurger style={{marginTop: "100px", marginLeft: "0.75rem"}}/>
    </div>
  );
};

export default Sidebar;