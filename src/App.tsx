import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilitySection } from './components/CredibilitySection';
import { AboutSection } from './components/AboutSection';
import { CoachingSection } from './components/CoachingSection';
import { CpiSection } from './components/CpiSection';
import { MightyNetworkSection } from './components/MightyNetworkSection';
import { CoursesSection } from './components/CoursesSection';
import { PodcastMediaSection } from './components/PodcastMediaSection';
import { WebinarsSection } from './components/WebinarsSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { SocialFeedSection } from './components/SocialFeedSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [initialEnquiryType, setInitialEnquiryType] = useState<string>('Coaching');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: string | null;
    data?: any;
  }>({
    isOpen: false,
    type: null,
    data: null
  });

  const handleNavigate = (sectionId: string, enquiryType?: string) => {
    setActiveSection(sectionId);
    if (enquiryType) {
      setInitialEnquiryType(enquiryType);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      const yOffset = -84; // Navbar height offset
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (type: string, data?: any) => {
    setModalState({
      isOpen: true,
      type,
      data
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null
    });
  };

  // Scroll listener to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'coaching', 'cpi', 'mighty-network', 'courses', 'podcast', 'webinars', 'partnerships', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
      />

      {/* Main Content Hub */}
      <main style={{ flexGrow: 1 }}>
        <Hero
          onNavigate={handleNavigate}
          onOpenModal={handleOpenModal}
        />

        <CredibilitySection
          onNavigate={handleNavigate}
        />

        <AboutSection />

        <CoachingSection
          onOpenModal={handleOpenModal}
          onNavigate={handleNavigate}
        />

        <CpiSection
          onOpenModal={handleOpenModal}
        />

        <MightyNetworkSection
          onOpenModal={handleOpenModal}
        />

        <CoursesSection
          onOpenModal={handleOpenModal}
        />

        <PodcastMediaSection
          onOpenModal={handleOpenModal}
        />

        <WebinarsSection
          onOpenModal={handleOpenModal}
        />

        <PartnershipsSection
          onNavigate={handleNavigate}
          onOpenModal={handleOpenModal}
        />

        <SocialFeedSection />

        <ContactSection
          initialEnquiryType={initialEnquiryType}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
      />

      {/* Reusable Modal Layer */}
      <DetailModal
        isOpen={modalState.isOpen}
        type={modalState.type || ''}
        data={modalState.data}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default App;
