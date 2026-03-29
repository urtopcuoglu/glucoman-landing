import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProblemStatement from './components/sections/ProblemStatement';
import Features from './components/sections/Features';
import WorkPackages from './components/sections/WorkPackages';
import ChatbotSection from './components/sections/ChatbotSection';
import StatsSection from './components/sections/StatsSection';
import FaqSection from './components/sections/FaqSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <WorkPackages />
        <ChatbotSection />
        <StatsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};

export default App;