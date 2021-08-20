import React from "react";
import Gif from "../component/printGifs/Gif";
import useGifs from "../hooks/useGifs";
import Spinner from "react-bootstrap/Spinner";

export default function Ultimabusqueda({ params }) {
  let keyword = "";
  params === undefined ? (keyword = "parrot") : (keyword = params.keyword);
  const { login, gifs } = useGifs({ keyword }); //Custom Hook

  if (login) {
    return <Spinner animation="border" variant="light" />;
  }

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} key={id} id={id} />
      ))}
    </>
  );
}
