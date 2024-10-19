import React from "react";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contactページ</h1>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  );
};
