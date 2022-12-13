import Image from 'next/image';
import React, { FC } from 'react';

const ProfileStoriesItem: FC = () => {
  return (
    <div className="cursor-pointer">
      <div className="stories-item-wrapper inactive flex justify-center items-center w-[81px] h-[81px] rounded-[50%]">
        <div className="bg-[#fff] w-[77px] h-[77px] p-[1px] rounded-[50%]">
          <Image
            className="rounded-[50%]"
            src="/avatar.png"
            alt="avatar"
            width="77"
            height="77"
          />
        </div>
      </div>
      <span className="flex justify-center text-center text-[12px] text-[#262626] mt-1">Anonim</span>
    </div>
  );
};

export default ProfileStoriesItem;