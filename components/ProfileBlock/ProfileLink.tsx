import Image from 'next/image';
import React, { FC } from 'react';

const ProfileLink: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Image className="rounded-[50%] cursor-pointer" src="/avatar.png" alt="avatar" width="60" height="60" />
      <div className="flex flex-col text-[14px]">
        <span className="font-semibold cursor-pointer">Anonim</span>
        <span className="text-[#8E8E8E]">UserName</span> 
      </div>
      <button className="text-[12px] font-semibold text-[#0095F6] ml-auto">Переключиться</button>
    </div>
  );
};

export default ProfileLink;