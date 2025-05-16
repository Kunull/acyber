'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Portal from '../components/Portal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Portal />
      <Contact />
      <Footer />
    </main>
  );
}
