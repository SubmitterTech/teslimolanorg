import React from "react";
import PostList from "../components/PostList";

const ArticlesPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <PostList
      postType="Makale"
      title="Tüm Makaleler"
      fetchUrl={`${API_URL}/api/admin/yazilar`}
    />
  );
};

export default ArticlesPage;
