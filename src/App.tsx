import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Problems from './components/Problems';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';
import Zones from './components/Zones';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Problems />
        <HowItWorks />
        <Reviews />
        <WhyUs />
        <Zones />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
