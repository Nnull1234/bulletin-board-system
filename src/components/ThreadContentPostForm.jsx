import React from 'react'

const ThreadContentPostForm = (props) => {
    const { id, get } = props
    // 作ったスレッドのデータをPostする
    const PostMessageData = () => {

        const inputData = document.getElementById("form").value
        fetch(
            `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`,
            {
                method: "POST",
                body: JSON.stringify({
                    post: inputData,
                }),
            }
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                get()
            })
    };

    return (
        <div>
            <br></br>
            <input type="text" id="form" placeholder='内容を入力してください'></input>
            <button onClick={PostMessageData}>投稿する</button>
        </div>
    )
}

export default ThreadContentPostForm
