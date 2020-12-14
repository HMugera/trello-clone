import { Drawer, Grow, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import colors from "../../utils/color";
import { getImages } from "../../utils/imageApi";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "350px",
  },
  menu: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
  },
  optionContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  box: {
    width: "45%",
    height: "90px",

    borderRadius: "9px",
    marginBottom: theme.spacing(2),
  },
}));
function SideMenu({ openSidemenu, setopenSidemenu, setBackgroundImage }) {
  const classes = useStyles();
  const [openOptionColor, setOpenOptionColor] = useState(false);
  const [openOptionImage, setOpenOptionImage] = useState(false);
  const [images, setImages] = useState([]);

  const getListOfImages = async () => {
    const listOfImages = await getImages();
    setImages(listOfImages);
  };

  useEffect(() => {
    getListOfImages();
  }, []);
  return (
    <div>
      <Drawer
        open={openSidemenu}
        anchor='right'
        onClose={() => setopenSidemenu(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url('https://cdn.thenewstack.io/media/2019/08/95f9201a-nature-3048299_1920.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionImage(!openOptionImage);
                setOpenOptionColor(false);
              }}
            ></div>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionColor(!openOptionColor);
                setOpenOptionImage(false);
              }}
            ></div>
          </div>

          {openOptionImage ? (
            <Grow in={openOptionImage}>
              <div className={classes.optionContainer}>
                {images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundImage: `url(${image.thumb})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      onClick={() => {
                        setBackgroundImage(image.url);
                        setopenSidemenu(false);
                      }}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          ) : (
            <Grow in={openOptionColor}>
              <div className={classes.optionContainer}>
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => {
                        setBackgroundImage(color);
                        setopenSidemenu(false);
                      }}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
