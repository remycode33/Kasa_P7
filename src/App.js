import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Logement from "./pages/logement/Logement.js";
import Error404 from "./pages/error404/Error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", //racine du site = page d'accueil
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
