import React from "react";

const FetchPost = () => {
  const Click = () => {
    // const body = document.getElementById("form");
    // console.log(body);
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        body: {
          title: "あいおうえ",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <input type="text" id="form"></input>
      <button onClick={Click}>スレッド作成</button>
    </div>
  );
};

export default FetchPost;
