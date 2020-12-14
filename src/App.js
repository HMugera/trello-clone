import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Main from "./components/Main/main";
import Navbar from "./components/navbar/navbar";
import SideMenu from "./components/sidemenu/sideMenu";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  const [openSidemenu, setopenSidemenu] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("orange");

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundImage,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
       
        height: "100vh",
        overflowY: "hidden",
   
      }}
    >
      <Navbar openSidemenu={openSidemenu} setopenSidemenu={setopenSidemenu} />
      <SideMenu
        openSidemenu={openSidemenu}
        setopenSidemenu={setopenSidemenu}
        setBackgroundImage={setBackgroundImage}
      />
      <Main />
    </div>
  );
}

export default App;
