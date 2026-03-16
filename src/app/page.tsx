import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhySection from "@/components/WhySection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <div id="page-progress" style={{ width: "0%" }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhySection />
        <Projects />
        <About />
        <Process />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <ProgressBar />
    </>
  );
}

// Inline progress bar tracker
function ProgressBar() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        (function(){
          var bar = document.getElementById('page-progress');
          if(!bar) return;
          window.addEventListener('scroll', function(){
            var s = document.documentElement;
            var p = s.scrollTop / (s.scrollHeight - s.clientHeight);
            bar.style.width = (p * 100) + '%';
          }, { passive: true });
        })();
      `
    }}/>
  );
}
