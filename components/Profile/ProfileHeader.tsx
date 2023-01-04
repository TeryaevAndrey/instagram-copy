import React from "react";
import Image from "next/image";
import { FC } from "react";
import { useAppSelector } from "../../store/hooks";
import { useRouter } from "next/router";

const ProfileHeader: FC = () => {
  return (
    <div className="flex items-center gap-20">
      <div className="relative w-[150px] h-[150px] rounded-[100%] overflow-hidden">
        <Image src="/avatar.png" alt="avatar" fill={true} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-7">
          <span className="text-[28px] text-[#262626] font-light">
            Test
          </span>
          <button className="edit-btn text-[14px] text-[#262626] font-semibold w-[180px] min-h-[30px] p-1 rounded-[3px]">
            Редактировать профиль
          </button>
          <Image
            className="cursor-pointer"
            src="/settings.svg"
            alt="settings"
            width="24"
            height="24"
          />
        </div>
        <div className="flex items-center gap-8">
          <p className="profile-header-text">
            <span className="profile-header-number">10</span>
            публикаций
          </p>
          <p className="profile-header-text">
            <span className="profile-header-number">10</span>
            подписчиков
          </p>
          <p className="profile-header-text">
            <span className="profile-header-number">10</span>
            подписок
          </p>
        </div>
        <div className="flex flex-col">
          <p className="profile-header-text font-semibold">Anonym</p>
          <p className="profile-header-text">
            Lorem, ipsum dolor.
          </p>
          <p className="profile-header-text">
            Lorem, ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
