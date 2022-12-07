import Image from "next/image";
import React, { FC } from "react";

const StoriesItem: FC = () => {
  return (
    <div className="cursor-pointer">
      <div className="stories-item-wrapper flex justify-center items-center w-[60px] h-[60px] rounded-[50%]">
        <div className="bg-[#fff] w-[56px] h-[56px] p-[1px] rounded-[50%]">
          <Image
            className="rounded-[50%]"
            src="/avatar.png"
            alt="avatar"
            width="56"
            height="56"
          />
        </div>
      </div>
      <span className="flex justify-center text-center text-[12px] text-[#262626] mt-1">Anonim</span>
    </div>
  );
};

export default StoriesItem;
