import React from "react";
import Gif from "../printGifs/Gif";
import useGifs from "../../hooks/useGifs";
import Spinner from "react-bootstrap/Spinner";
import logo from "../../img/logo.png";
import Navbar from "react-bootstrap/Navbar";
import "./listOfGif.css";

export default function ListOfGifs({ params }) {
  let keyword = "";
  params === undefined ? (keyword = "parrot") : (keyword = params.keyword);
  const { login, gifs } = useGifs({ keyword }); //Custom Hook

  if (login) {
    return <Spinner animation="border" variant="light" />;
  }

  return (
    <div className="ListOfGifs">
      <Navbar.Brand href="/">
        <img alt="" src={logo} width="50" height="50" className="m-3" />
      </Navbar.Brand>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </div>
  );
}
