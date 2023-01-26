import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ThreadCreateScreen = () => {
  const [threadName, setThreadName] = useState("");
  const navigate = useNavigate();

  // スレッド一覧ページに遷移
  const TransitionThreadListScreen = () => {
    navigate("/thread");
  };

  // 作ったスレッドのデータをPostする
  const PostCreateThreadData = () => {
    // const inputData = document.getElementById("form").value;
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        body: JSON.stringify({
          title: threadName,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // 再度スレッド一覧に遷移
        navigate("/thread");
      });
  };

  return (
    <div>
      <button onClick={TransitionThreadListScreen}>スレッド一覧に戻る</button>
      <br></br>
      <input
        type="text"
        id="form"
        placeholder="スレッド名を入力してください"
        onChange={setThreadName}
      ></input>
      <button onClick={PostCreateThreadData}>新規スレッド作成</button>
    </div>
  );
};

export default ThreadCreateScreen;
