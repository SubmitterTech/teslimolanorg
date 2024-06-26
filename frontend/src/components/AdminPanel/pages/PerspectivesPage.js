import React from "react";
import PostList from "../components/PostList";

const PerspectivesPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <PostList
      postType="Perspektif"
      title="Tüm Perspektifler"
      fetchUrl={`${API_URL}/api/admin/yazilar`}
    />
  );
};

export default PerspectivesPage;
