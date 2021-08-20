import React, { useContext } from "react";
import GifsContext from "../context/GifsContext";
import Gif from "../component/printGifs/Gif";
import logo from "../img/logo.png";
import Navbar from "react-bootstrap/Navbar";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  if (gif !== undefined) {
    localStorage.setItem("gifs", JSON.stringify(gif));
  }

  const gifLocal = JSON.parse(localStorage.getItem("gifs"));

  return (
    <>
      <Navbar.Brand href="/">
        <img alt="" src={logo} width="50" height="50" className="m-3" />
      </Navbar.Brand>
      <Gif {...gifLocal} />
    </>
  );
}
