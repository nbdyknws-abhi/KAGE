import { useState } from "react";
import { MouseGlow } from "./components/MouseGlow";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { Lookbook } from "./components/Lookbook";
import { Philosophy } from "./components/Philosophy";
import { Testimonials } from "./components/Testimonials";
import { Countdown } from "./components/Countdown";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "./components/CartDrawer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      {/* Dynamic Grain Noise Overlay */}
      <div className="grain-overlay" />

      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white">
          {/* Ambient Glow */}
          <MouseGlow />

          {/* Navigation */}
          <Navbar />

          {/* Cart Drawer */}
          <CartDrawer />

          {/* Sections */}
          <main>
            <Hero />
            <FeaturedCollection />
            <Lookbook />
            <Philosophy />
            <Testimonials />
            <Countdown />
            <Newsletter />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </CartProvider>
  );
}

export default App;
