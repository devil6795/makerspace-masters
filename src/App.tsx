import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TopStrip } from './components/TopStrip';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { MakerspaceMastersPage } from './pages/MakerspaceMastersPage';
import { MastersXPage } from './pages/MastersXPage';
import { ArenaPage } from './pages/ArenaPage';
import { KaushalBodhPage } from './pages/KaushalBodhPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#131313]">
        {/* Top Banner Announcement */}
        <TopStrip />

        {/* Main Glassmorphic Navigation */}
        <Navbar onOpenBookingModal={() => setIsBookingOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenBookingModal={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/about-us"
              element={<AboutUsPage onOpenBookingModal={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/makerspace-masters"
              element={
                <MakerspaceMastersPage onOpenBookingModal={() => setIsBookingOpen(true)} />
              }
            />
            <Route
              path="/makerspace-masters-x"
              element={<MastersXPage onOpenBookingModal={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/makerspace-masters-arena"
              element={<ArenaPage onOpenBookingModal={() => setIsBookingOpen(true)} />}
            />
            <Route
              path="/makerspace-Kaushal"
              element={
                <KaushalBodhPage onOpenBookingModal={() => setIsBookingOpen(true)} />
              }
            />
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer & CTA */}
        <Footer onOpenBookingModal={() => setIsBookingOpen(true)} />

        {/* 3-Step Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </HashRouter>
  );
}

export default App;
