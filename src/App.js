import React from "react";
import FetchGet from "./FetchGet";
import FetchPost from "./FetchPost";
import "./App.css";

const App = () => {
  return (
    <div>
      <header id="header">掲示板</header>
      <h1>新着スレッド</h1>
      <FetchPost />
      <FetchGet />
    </div>
  );
};

export default App;
