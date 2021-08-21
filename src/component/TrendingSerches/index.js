import React, { Suspense } from "react";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "react-bootstrap/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSerches"));
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner animation="border" />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner animation="border" />}
      </Suspense>
    </div>
  );
}
