import React from 'react'
import PostList from '../components/PostList'

const PerspectivesPage = () => {
  return (
    <PostList 
    postType="Perspektif"
    title="Tüm Perspektifler"
    fetchUrl="http://localhost:5001/api/admin/yazilar"
    />
  )
}

export default PerspectivesPage