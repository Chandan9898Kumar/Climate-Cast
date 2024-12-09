import "./App.css";
import Spinner from "./Spinner/Spinner";
import React, { lazy, Suspense } from "react";

const FinalApp = lazy(() => import("./ThirdWeatherApp/MainPage"));
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <FinalApp />
    </Suspense>
  );
}

export default App;
