import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Profile: FC = () => {
  return (
    <Link className="sidebar-profile menu-item flex items-center gap-3 p-3 cursor-pointer hover:bg-[#f3f3f3] rounded-[20px]" href="/profile">
      <Image className="rounded-[50%]" src="/avatar.png" alt="profile" width="24" height="24" />
      <span className="text-[16px] text-[#262626]">Профиль</span>
    </Link>
  );
};

export default Profile;