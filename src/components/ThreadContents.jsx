import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import ThreadContentPostForm from './ThreadContentPostForm';
const ThreadContents = () => {
    const [threadContents, setThreadContents] = useState(null);
    const navigate = useNavigate()
    const { state } = useLocation()

    // スレッド一覧ページに遷移
    const TransitionThreadListScreen = () => {
        navigate("/thread")
    }


    const getThreadContentsData = () => {
        console.log(state)
        fetch(
            `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${state}/posts?offset=0`,
            { method: "GET" }
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setThreadContents(data.posts)
                console.log(data.posts)
            })
    }

    useEffect(() => {
        getThreadContentsData()
    },)

    return (
        < div >
            <button onClick={TransitionThreadListScreen}>スレッド一覧に戻る</button>
            <ThreadContentPostForm id={state} get={getThreadContentsData}></ThreadContentPostForm>

            {threadContents !== null ? (
                <ul>
                    {threadContents.map((post) => {
                        return (
                            <div id="list" key={post.id}>
                                {post.post}
                            </div>
                        );
                    })}
                </ul>
            ) : (
                <p>投稿はありません</p>
            )}
        </div >
    )

}
export default ThreadContents
