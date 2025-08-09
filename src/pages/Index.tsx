import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Resources from '@/components/Resources';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Mentoring from '@/components/Mentoring';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Resources Section */}
        <Resources />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Mentoring Section */}
        <Mentoring />
        
        {/* About Section */}
        <About />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
