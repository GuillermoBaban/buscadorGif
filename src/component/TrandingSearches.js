import React, { useState, useEffect, useRef } from "react";
import getTrendingGifs from "../services/getTrendingGifs";
import Category from "../component/category/Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: "100px",
      });

      observer.observe(elementRef.current);

      return () => observer && observer.disconnect();
    });
  });

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
