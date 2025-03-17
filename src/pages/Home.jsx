import AboutUs from "../features/Home/AboutUs";
import ContactSec from "../features/Home/ContactSec";
import Dashboard from "../features/Home/Dashboard";
import Footer from "../features/Home/Footer";
import HeroSection from "../features/Home/HeroSection";
import HowItWork from "../features/Home/HowItWork";
import Testimonials from "../features/Home/Testimonials";

function Home() {
  return (
    <div className="w-full">
      <Dashboard />
      <HeroSection />
      <AboutUs />
      <HowItWork />
      <Testimonials />
      <ContactSec />
    </div>
  );
}
export default Home;
