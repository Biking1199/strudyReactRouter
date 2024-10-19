import React from "react";
import { Link } from "react-router-dom";
export const Posts = () => {
  let id = 1;
  return (
    <div>
      <h1>お知らせ一覧</h1>
      <Link to={`/posts/${id}`}>
        <p>2024年1月のニュース</p>
      </Link>
    </div>
  );
};
