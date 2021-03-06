import React, { useState, useEffect } from "react";
import getTrendingGifs from "../../services/getTrendingGifs";
import Category from "../category/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
