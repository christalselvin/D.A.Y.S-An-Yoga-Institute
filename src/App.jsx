import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import AboutUs from "./pages/About/Component/AboutUs";
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
        { path: "about", element: <AboutUs /> },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
