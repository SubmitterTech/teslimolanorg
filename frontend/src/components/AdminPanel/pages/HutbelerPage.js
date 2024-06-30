import React from "react";
import PostList from "../components/PostList";

const HutbelerPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <PostList
      postType="Hutbe"
      title="Tüm Hutbeler"
      fetchUrl={`${API_URL}/api/admin/yazilar`}
    />
  );
};

export default HutbelerPage;
