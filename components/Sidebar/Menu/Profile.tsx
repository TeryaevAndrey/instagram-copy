import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const Profile: FC = () => {
  return (
    <Link className="md:w-[100%] min-w-[24px] height-[24px] sidebar-profile menu-item flex items-center gap-3 p-0 min-[1100px]:p-3 cursor-pointer hover:bg-[#f3f3f3] rounded-[20px] md:justify-center min-[1100px]:justify-start" href="/profile">
      <Image className="rounded-[50%]" src="/avatar.png" alt="profile" width="24" height="24" />
      <span className="text-[16px] text-[#262626] hidden min-[1100px]:flex">Профиль</span>
    </Link>
  );
};

export default Profile;