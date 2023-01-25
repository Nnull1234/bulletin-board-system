import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreadListScreen from "./components/ThreadListScreen";
import ThreadCreateScreen from "./components/ThreadCreateScreen";
import ThreadContents from "./components/ThreadContents";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/thread" element={<ThreadListScreen />}> </Route>
          <Route path="/thread/:id" element={<ThreadContents />}></Route>
          <Route path="/thread/new" element={<ThreadCreateScreen />}></Route>
        </Routes>
      </BrowserRouter >
    </div >
  );
};

export default App;
