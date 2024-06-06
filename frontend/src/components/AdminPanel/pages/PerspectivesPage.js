import React from 'react'
import PostList from '../components/PostList'

const PerspectivesPage = () => {
  return (
    <PostList 
    postType="perspektif"
    title="Tüm Perspektifler"
    fetchUrl="http://localhost:5001/api/admin/yazilar/Perspektif"
    />
  )
}

export default PerspectivesPage