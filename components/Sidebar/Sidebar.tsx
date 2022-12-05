import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Menu from './Menu/Menu';

const Sidebar: FC = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 bg-[#fff] py-4 px-4 min-w-[240px]">
      <Link href="/">
        <Image src="/instaIcon.svg" alt="instagram" width="110" height="40" />
      </Link>
      <Menu />
    </div>
  );
};

export default Sidebar;