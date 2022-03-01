import React from 'react'

import useStyles from './styles'

const Post = ({title}) => {

    const classes = useStyles()
    return (
        <h1>{title}</h1>

    )
}

export default Post