import React, { useState, useEffect } from "react";

const FetchGet = () => {
  const [posts, setPosts] = useState([]);
  const [threadContents, setThreadContents] = useState({});
  let element = "";

  const getThreadListData = (num) => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${posts[0].id}/posts?offset=0`,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThreadContents(data);
        console.log(threadContents);

        element = React.createElement('h1', null, 'Hello world!')
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
      </div >
      <button onClick={getThreadListData}>Thread</button>

      <div>
        {element}
      </div >
    </>
  );
};

export default FetchGet;
