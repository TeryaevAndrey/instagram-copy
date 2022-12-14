import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Sidebar from "../components/Sidebar/Sidebar";
import Stories from "../components/Stories/Stories";

const Home = () => {
  return (
    <>
    <Head>
    <link rel="icon" href="/insta-logo-head.svg" />
      <title>Instagram</title>
    </Head>
    <div className="flex items-start">
      <Sidebar />
      <div className="w-[100%] md:w-[80%] ml-auto">
        <div className="flex justify-center items-start gap-5 mx-auto mt-7">
          <div className="flex flex-col">
            <Header />
            <Stories />
            <Posts />
          </div>
          <ProfileBlock />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;