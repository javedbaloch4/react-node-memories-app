import React from 'react'
import Post from './Post/Post'

import useStyles from './styles'

const Posts = () => {
    const classes = useStyles()

    return (
        <>
            <h1>Posts</h1>
            <Post title="Post 1" />
            <Post title="Post 2" />
        </>
    )
}

export default Posts