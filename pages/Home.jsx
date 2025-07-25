import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Popular from "../components/Popular";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
import Footer from "../components/Footer";


function Home (){
    return(
        <>
          <Navbar/>
           <Hero/>
           <Destination/>
          <Popular/>
          <Feature/>
          <Blog/>
          <Footer/>
        </>
    )
}


export default Home;
