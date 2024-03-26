import Hero from "../Components/Hero";
import About from "../Components/About";
import VideoGround from "../Components/VideoGround";
import RenderFotos from "../Components/RenderFotos";
import Navbar from "../Components/Navbar";
import SliderF from "../Components/SliderF";
import { Urgencias } from "../Components/Urgencias";
// import Amenidades from "../Components/Amenidades";
// import GaleryHome from "../Components/GaleryHome";

const Home = () => {
  return (
    <div id="inicio">
      <Navbar />
      <Hero />
      <About />
      <RenderFotos />
      <Urgencias />
      <SliderF />
      {/* <GaleryHome /> */}
      {/* <Amenidades />  */}
      <VideoGround />
    </div>
  );
};

export default Home;
