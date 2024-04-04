import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from './component/HeroBanner';
import Testimonial from './component/Testimonial';
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from './section/Footer';
import Header from "./section/Header";
import OurClients from "./section/OurClients";
import './style/default.css';
import './style/style.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <About />
      <OurClients />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
