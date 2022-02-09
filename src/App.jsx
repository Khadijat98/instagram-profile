import "./App.scss";
import users from "../src/data/users";
import images from "../src/data/images";
import ImagesTab from "./components/ImagesTab/ImagesTab";
import Nav from "./components/Nav/Nav";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

const App = () => {
  return <div>
    <Nav />
    <ProfileHeader userProfileHeader={users}/>
    {/* <ImagesTab imagesArr={images}/> */}
    <ImagesTab users={users}/>
  </div>
};

export default App;