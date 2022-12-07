import Posts from "../components/Posts/Posts";
import Sidebar from "../components/Sidebar/Sidebar";
import Stories from "../components/Stories/Stories";

const Home = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="w-[80%] ml-auto">
        <div className="flex justify-center items-start gap-5 mx-auto mt-7">
          <div className="flex flex-col">
            <Stories />
            <Posts />
          </div>
          <div className="w-[320px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Home;