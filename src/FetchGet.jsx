import React, { useState, useEffect } from "react";

const FetchGet = () => {
  const [posts, setPosts] = useState([]);
  const [threadContents, setThreadContents] = useState({});

  const getThreadListData = () => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/0/posts?offset=0",
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThreadContents(data);
        console.log(threadContents);
      });
  };

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0",
      { method: "GET" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <div id="list" key={post.id}>
              {post.title}
            </div>
          ))}
        </ul>
      </div>
      <button onClick={getThreadListData}>Thread</button>
    </>
  );
};

export default FetchGet;
