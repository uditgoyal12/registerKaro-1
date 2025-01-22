import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import VideoIntroduction from './components/VideoIntroduction';
import OurClients from './components/OurClients';
import OurBlogs from './components/OurBlogs';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import MobileAppShowcase from './components/MobileAppShowcase';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <Hero/>
      <Services />
      <About/>
      <WhyChoose/>
      <VideoIntroduction/>
      <OurClients/>
      <OurBlogs/>
      <TestimonialsSection/>
      <FAQSection/>
      <MobileAppShowcase/>
      <Footer />
      
    </div>
  );
}

export default App;