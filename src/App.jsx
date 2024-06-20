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
import Footer from "./component/Footer/Footer";
import LocationSidebar from "./component/Sidebar/LocationSidebar";
import Offers from "./component/Offers/Offers";
import Services from "./component/Services/Services";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-red-50">
        <Navbar />
        <Outlet />
        <LocationSidebar />
        <Footer />
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
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/services",
        element: <Services />,
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
