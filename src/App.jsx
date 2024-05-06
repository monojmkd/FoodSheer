import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./component/Body/Body";
import Navbar from "./component/Navbar/Navbar";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import RestaurantMenu from "./component/RestaurantMenu/RestaurantMenu";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
