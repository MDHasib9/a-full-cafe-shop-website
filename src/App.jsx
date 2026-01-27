import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import MenuSection from './Components/MenuSection';
import CustomCoffee from './Components/CustomCoffee';
import AboutSection from './Components/AboutSection';
import TestimonialsSection from './Components/TestimonialsSection';
import ContactSection from './Components/ContactSection';
function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <HeroSection/>
      <MenuSection/>
      <CustomCoffee/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      
       
    </div>
  );
}

export default App;