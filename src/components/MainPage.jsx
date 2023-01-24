import React from 'react'
import Header from './Header'
import ThreadList from './ThreadList'
import ThreadPost from './ThreadPost'

const MainPage = () => {
    return (
        <div>
            <Header />
            <ThreadPost />
            <ThreadList />
            // 面談メモ
            // コンポーネントをちゃんと分ける　変数、関数の命名ちゃんとする
            // ページ遷移など、提示されたものを正しく実装する
        </div>
    )
}

export default MainPage
