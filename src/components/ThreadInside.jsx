import React from 'react'
import { useState } from 'react';
const ThreadInside = (props) => {
    const [threadContents, setThreadContents] = useState(null)

    const getThreadListData = () => {
        fetch(
            `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.id}/posts?offset=0`,
            { method: "GET" }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setThreadContents(data.posts);
                console.log(threadContents);
            })
    }
    return (
        <div>
            <button onClick={getThreadListData}>げと</button>

            {
                threadContents !== null ? (
                    <ul>
                        {threadContents.map((post) => (
                            <div id="list" key={post.id}>
                                {post.post}
                            </div>
                        ))}
                    </ul>
                ) : <p>投稿はありません</p>
            }

        </div>
    )
}

export default ThreadInside
