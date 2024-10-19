import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページ</h1>
      <div>
        <Link to="detailA">DetailA</Link>
        <br />
        <Link to="detailB">DetailB</Link>
      </div>

      <Outlet />
    </div>
  );
};
