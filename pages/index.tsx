import Sidebar from "../components/Sidebar/Sidebar";
import Stories from "../components/Sidebar/Stories/Stories";

const Home = () => {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="flex justify-end items-start ml-auto">
        <Stories />
      </div>
    </div>
  )
}

export default Home;