import Image from "next/image";
import React, { FC } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts: FC = () => {
  return (
    <>
      <div className="profile-tabs flex items-center gap-10 w-[100%] justify-center mt-10">
        <div className="profile-tab active">
          <Image src="/grid.svg" alt="publications" width="12" height="12" />
          <span>Публикации</span>
        </div>
        <div className="profile-tab">
          <Image src="/saved.svg" alt="saved" width="12" height="12" />
          <span>Сохраненное</span>
        </div>
        <div className="profile-tab">
          <Image src="/marks.svg" alt="marks" width="12" height="12" />
          <span>Отметки</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 lg:gap-5 justify-center">
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </div>
    </>
  );
};

export default ProfilePosts;
