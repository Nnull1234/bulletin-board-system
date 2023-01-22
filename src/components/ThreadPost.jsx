import React from 'react'

const ThreadPost = () => {
    const Post = () => {
        const inputData = document.getElementById("form").value
        fetch(
            "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
            {
                method: "POST",
                body: JSON.stringify({
                    title: inputData,
                }),
            }
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
            })
    };
    return (
        <div>
            <input type="text" id="form"></input>
            <button onClick={Post}>スレッド作成</button>
        </div>
    )
}

export default ThreadPost
