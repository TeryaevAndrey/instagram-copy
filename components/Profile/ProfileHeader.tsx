import Image from "next/image";
import { FC } from "react";

const ProfileHeader: FC = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="relative w-[150px] h-[150px] rounded-[100%] overflow-hidden">
        <Image src="/avatar.png" alt="avatar" fill={true} />
      </div>
      <div className="flex items-center gap-7">
        <span className="text-[28px] text-[#262626]">_Anonym_</span>
        <button className="edit-btn text-[14px] text-[#262626] font-semibold w-[180px] min-h-[30px] p-1 rounded-[3px]">
          Редактировать профиль
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
