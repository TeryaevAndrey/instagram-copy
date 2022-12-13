import { FC } from "react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileStories from "../../components/Profile/ProfileStories";
import Sidebar from "../../components/Sidebar/Sidebar";

const Profile: FC = () => {
    return(
        <div className="flex items-start">
      <Sidebar />
      <div className="w-[80%] ml-auto">
        <div className="flex justify-center items-start gap-5 mx-auto mt-7">
          <div className="flex flex-col">
            <ProfileHeader />
            <ProfileStories />
          </div>
        </div>
      </div>
    </div>
    );
}

export default Profile;