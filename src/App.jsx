import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Styles/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import BuyCards from "./components/BuyCards";
import OurBlog from "./components/OurBlog";
import Home from "./components/Home";

function App() {
/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route element={<BuyCards />}></Route>
      <Route element={<OurBlog/>}></Route>
    </Route>
  )
)
*/
  return (
    <div className="mainContainer mainContainerDark">
      <Header />
      <Footer />
    </div>
  );
}

export default App;

/*

<RouterProvider router={router} />

const Root = () => {
  return (
    <ul className="navLinksHeader">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/buycards">Buy Cards</Link>
      </li>
      <li>
        <Link to="/ourblog">Our Blog</Link>
      </li>
    </ul>
  );
};
*/
