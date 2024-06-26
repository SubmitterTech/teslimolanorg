import React from "react";
import PostList from "../components/PostList";

const VideosPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <PostList
      postType="Video"
      title="Tüm Videolar"
      fetchUrl={`${API_URL}/api/admin/yazilar`}
    />
  );
};

export default VideosPage;
