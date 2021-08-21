import React from "react";
import Gif from "../printGifs/Gif";
import useGifs from "../../hooks/useGifs";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import logo from "../../img/logo.png";
import Navbar from "react-bootstrap/Navbar";
import "./SearchResults.css";

export default function ListOfGifs({ params }) {
  let keyword = "";
  params === undefined ? (keyword = "parrot") : (keyword = params.keyword);
  const { loading, gifs, setPage } = useGifs({ keyword }); //Custom Hook

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) {
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
      <Button onClick={handleNextPage}>Get next page</Button>
    </div>
  );
}
