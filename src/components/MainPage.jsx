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
        </div>
    )
}

export default MainPage
