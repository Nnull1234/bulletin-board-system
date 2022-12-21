import React, { useState, useEffect } from "react";

const FetchGet = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads?offset=0",
      { method: "GET" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div id="list" key={post.id}>
            {post.title}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchGet;
