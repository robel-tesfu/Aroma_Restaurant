import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureCollection from './components/SignatureCollection';
import StorySection from './components/StorySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <SignatureCollection />
        <StorySection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
