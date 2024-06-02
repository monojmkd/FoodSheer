import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./component/Body/Body";
import Navbar from "./component/Navbar/Navbar";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import RestaurantMenu from "./component/RestaurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./Store/store";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#fff4ea]">
        <Navbar />
        <Outlet />
      </div>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
