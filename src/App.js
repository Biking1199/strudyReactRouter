import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./react-router-dom/Top";
import { Contact } from "./react-router-dom/Contact";
import { Posts } from "./react-router-dom/Posts";
import { Post } from "./react-router-dom/Post";
import { NotFound } from "./react-router-dom/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ルートパスにTop.jsを読み込ませる */}
          <Route path="/" element={<Top />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          {/* idを使ったようなページの表示 */}
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
