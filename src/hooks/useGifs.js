import { useState, useEffect, useContext } from "react";
import GetGifs from "../services/GetGifs";
import GifsContext from "../context/GifsContext";

let keywordToUse = "";
export default function useGifs({ keyword }) {
  keywordToUse = keyword;
  if (keywordToUse !== "parrot") {
    localStorage.setItem("keywordToUse", keywordToUse);
  }

  if (localStorage.getItem("keywordToUse") !== null) {
    keywordToUse = localStorage.getItem("keywordToUse");
  }

  const { gifs, setGifs } = useContext(GifsContext);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    setLogin(true);
    GetGifs({ keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLogin(false);
    });
  }, [keywordToUse, setGifs]);
  return { login, gifs };
}
