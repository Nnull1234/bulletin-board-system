import React from "react";

const FetchPost = () => {
  const Click = () => {
    const inputData = document.getElementById("form").value;

    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        body: JSON.stringify({
          title: inputData
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const A = () => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/0/posts",
      {
        method: "POST",
        body: JSON.stringify({
          post: "これはtest"
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <input type="text" id="form"></input>
      <button onClick={Click}>スレッド作成</button>
      <button onClick={A} >投稿</button>
    </div>
  );
};

export default FetchPost;
