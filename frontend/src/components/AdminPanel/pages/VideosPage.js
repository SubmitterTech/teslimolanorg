import React from 'react'
import PostList from '../components/PostList'

const VideosPage = () => {
  return (
    <PostList 
    postType="video"
    title="Tüm Videolar"
    fetchUrl="http://localhost:5001/api/admin/yazilar/Video"
    />
  )
}

export default VideosPage