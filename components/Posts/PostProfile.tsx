import Image from 'next/image';
import React, { FC } from 'react';

const PostProfile: FC = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Image className="rounded-[50%]" src="/avatar.png" alt="avatar" width="32" height="32" />
      <span className="text-[14px] font-semibold text-[#262626]">Anonim</span>
    </div>
  );
};

export default PostProfile;