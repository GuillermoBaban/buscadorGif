import { useState, useEffect, useContext } from "react";
import GetGifs from "../services/GetGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

let keywordToUse = "";
export default function useGifs({ keyword }) {
  const [login, setLogin] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  keywordToUse = keyword;
  if (keywordToUse !== "parrot") {
    localStorage.setItem("keywordToUse", keywordToUse);
  }

  if (localStorage.getItem("keywordToUse") !== null) {
    keywordToUse = localStorage.getItem("keywordToUse");
  }

  useEffect(() => {
    setLogin(true);
    GetGifs({ keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLogin(false);
    });
  }, [setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    GetGifs({ keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, setGifs]);

  return { login, loadingNextPage, gifs, setPage };
}
