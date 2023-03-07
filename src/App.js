import "bulma/css/bulma.min.css";
import "./App.css";
import AboutMe from "./screens/AboutMe";
import NavBar from "./common/NavBar";
import WhatIDo from "./screens/WhatIDo";
import Quali from "./screens/Quali";
import MyWork from "./screens/MyWork";
import ContactMe from "./screens/ContactMe";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <WhatIDo />
      <Quali />
      <MyWork />
      <ContactMe />
    </>
  );
}

export default App;
