import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileStories from "../../components/Profile/ProfileStories";
import Sidebar from "../../components/Sidebar/Sidebar";

export const getServerSideProps: GetServerSideProps = async(context) => {
  const id = context.query.id;

  const res = await fetch(`http://localhost:3000/api/profile/63aea591170c59441973ab10`, {
    method: "GET"
  });
  const data = await res.json();

  return{
    props: {
      data
    }
  }
}

const Profile: FC = ({data}: any) => {  
  return (
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
  );
};

export default Profile;
