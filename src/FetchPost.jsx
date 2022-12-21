import React from "react";

const FetchPost = () => {
  const Click = () => {
    const body = document.getElementById("form");
    fetch(
      "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads",
      {
        method: "POST",
        body: body,
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
