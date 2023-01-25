import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const ThreadListScreen = () => {
    const [threadList, setThreadList] = useState([])
    const navigate = useNavigate()


    // スレッド新規作成ページに遷移
    const TransitionThreadCreateScreen = () => {
        navigate("/thread/new")
    }

    // スレッド内ページに遷移
    const TransitionThreadContensts = (e) => {
        navigate(`/thread/${e.target.className}`, {
            state: e.target.className,
        })
    };

    useEffect(() => {
        fetch(
            "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0",
            { method: "GET" }
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setThreadList(data)
            })
    }, [])

    return (
        <div>
            <Header />

            <button onClick={TransitionThreadCreateScreen}>スレッドを新規作成する</button>

            <ul>
                {threadList.map((post) => (
                    <div
                        id="list"
                        key={post.id}
                        className={post.id}
                        onClick={TransitionThreadContensts}
                    >
                        {post.title}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ThreadListScreen
