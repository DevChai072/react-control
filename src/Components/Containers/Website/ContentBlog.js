import React from 'react'
import ContentBlogView from '../../Views/Website/ContentBlogView'

const ContentBlog = props => {

    const { children } = props

    return (
        <ContentBlogView
            children={children} //Component
        />
    )
}

export default ContentBlog
