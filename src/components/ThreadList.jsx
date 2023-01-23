import { useState, useEffect } from "react";
import React from "react";

const ThreadList = () => {
  const [posts, setPosts] = useState([]);
  const [nowClickId, setNowClickId] = useState("");
  const [threadContents, setThreadContents] = useState(null);

  const getThreadListData = (id) => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThreadContents(data.posts);
        console.log(data.posts);
        // setId(data.threadId);
        //  console.log(id);
      });
  };

  const handleClick = (e) => {
    getThreadListData(e.target.className);
    setNowClickId(e.target.className);
  };

  const Post = () => {
    const inputData = document.getElementById("form2").value;

    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${nowClickId}/posts`,
      {
        method: "POST",
        body: JSON.stringify({
          post: inputData,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getThreadListData(nowClickId);
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
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <div
              id="list"
              key={post.id}
              className={post.id}
              onClick={handleClick}
            >
              {post.title}
            </div>
          ))}
        </ul>
      </div>
      <div>
        <input type="text" id="form2"></input>
        <button onClick={Post}>投稿する</button>
      </div>
      <div>
        {threadContents !== null ? (
          <ul>
            {threadContents.map((post, index) => {
              return (
                <div id="list" key={index}>
                  {post.post}
                </div>
              );
            })}
          </ul>
        ) : (
          <p>投稿はありません</p>
        )}
      </div>
    </>
  );
};

export default ThreadList;
