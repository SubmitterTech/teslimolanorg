import React from 'react';
import PostList from '../components/PostList';


const ArticlesPage = () => {
  return (
    <PostList
      postType="makale"
      title="Tüm Makaleler"
      fetchUrl="http://localhost:5001/api/admin/yazilar/Makale"
    />
  );
};

export default ArticlesPage;