import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrap">
          <div className="max-w-[1200px] mx-auto ">
            <Navbar />
          </div>
          <Hero />
        </div>
      </div>
      <About />
      <div className="">
        <Portfolio/>
        <Services/>
        <Partners/>
        <Footer/>


      </div>
    </>
  );
};

export default App;
