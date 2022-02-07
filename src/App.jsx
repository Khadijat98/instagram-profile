import "./App.scss";
import users from "../src/data/users";
import ImagesTab from "./components/ImagesTab/ImagesTab";
import Nav from "./components/Nav/Nav";

const App = () => {
  return <div>
    <Nav />
    {/* <ImagesTab imagesArr={users}/> */}
  </div>;
};

export default App;