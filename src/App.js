import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetaillA } from "./Page1DetaillA";
import { Page1DetaillB } from "./Page1DetaillB";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />}>
            <Route path="detaillA" element={<Page1DetaillA />} />
            <Route path="detaillB" element={<Page1DetaillB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
