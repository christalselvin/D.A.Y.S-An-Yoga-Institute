import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./pages/Home/components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "article", element: <Article /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
