import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileStories from "../../components/Profile/ProfileStories";
import Sidebar from "../../components/Sidebar/Sidebar";
import { User } from "../../types";
import Head from "next/head";
import { useAppDispatch } from "../../store/hooks";
import { setUserInfo } from "../../store/profile/userInfoSlice";
import { parse } from "path";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  const res = await fetch(`http://localhost:3000/api/profile/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface IProfile {
  data: string;
}

const Profile: FC<IProfile> = ({ data }) => {
  const dispatch = useAppDispatch();
  const userInfo: User = JSON.parse(data);

  delete userInfo.password;

  React.useEffect(() => {
    dispatch(setUserInfo(userInfo))
  }, [userInfo, dispatch]);

  return (
    <>
      <Head>
        <link rel="icon" href="/insta-logo-head.svg" />
        <title>
          {userInfo.contact}
          {`<${userInfo.userName}>`}
        </title>
      </Head>
      <div className="flex items-start">
        <Sidebar />
        <div className="w-[80%] ml-auto">
          <div className="flex justify-center items-start gap-5 mx-auto mt-7">
            <div className="flex flex-col">
              <ProfileHeader />
              <ProfileStories />
              <ProfilePosts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
