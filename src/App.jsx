import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Styles/App.css";
import BuyCards from "./components/BuyCards";
import OurBlog from "./components/OurBlog";
import Home from "./components/Home";

function App() {
  return (
    <div className="mainContainer mainContainerDark">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
