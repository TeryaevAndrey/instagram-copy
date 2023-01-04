import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks';

const ProfileLink: FC = () => {
  const userInfo = useAppSelector(state => state.user.userInfo);

  return (
    <Link href={`/profile/${userInfo.userId}`} className="flex items-center gap-4">
      <Image className="rounded-[50%] cursor-pointer" src="/avatar.png" alt="avatar" width="60" height="60" />
      <div className="flex flex-col text-[14px]">
        <span className="font-semibold cursor-pointer">Anonim</span>
        <span className="text-[#8E8E8E]">UserName</span> 
      </div>
      <button className="text-[12px] font-semibold text-[#0095F6] ml-auto">Переключиться</button>
    </Link>
  );
};

export default ProfileLink;