import AboutUs from "../ui/Home/AboutUs";
import ContactSec from "../ui/Home/ContactSec";
import Dashboard from "../ui/Home/Dashboard";
import HeroSection from "../ui/Home/HeroSection";
import HowItWork from "../ui/Home/HowItWork";
import Testimonials from "../ui/Home/Testimonials";

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
