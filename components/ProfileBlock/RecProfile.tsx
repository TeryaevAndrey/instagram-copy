import Image from "next/image";
import React, { FC } from "react";

const RecProfile: FC = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Image src="/avatar.png" alt="avatar" width="32" height="32" />
      <div className="flex flex-col">
        <span className="text-[14px] text-[#262626]">Anonim</span>
        <span className="text-[12px] text-[#8E8E8E]">Подписаны: Anonim и 2</span>
      </div>
      <button className="bg-transparent text-[12px] font-semibold text-[#0095F6] ml-auto">Подписаться</button>
    </div>
  );
};

export default RecProfile;
