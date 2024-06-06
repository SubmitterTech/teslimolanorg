import React from 'react'
import PostList from '../components/PostList'

const VideosPage = () => {
  return (
    <PostList 
    postType="Video"
    title="Tüm Videolar"
    fetchUrl="http://localhost:5001/api/admin/yazilar"
    />
  )
}

export default VideosPage