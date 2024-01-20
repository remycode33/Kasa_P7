import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Error404 from "./pages/error404/Error404.jsx";
// import Logement from "./pages/logement/Logement.js";
// import Error404 from "./pages/error404/Error404";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Logement from "./pages/logement/Logement.jsx";

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
