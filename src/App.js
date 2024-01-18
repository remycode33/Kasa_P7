import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Error404 from "./pages/error404/Error404.js";
// import Logement from "./pages/logement/Logement.js";
// import Error404 from "./pages/error404/Error404";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Logement from "./pages/logement/Logement.js";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
