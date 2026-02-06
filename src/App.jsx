import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { ExpandFeatures } from './components/sections/ExpandFeatures';
import { Showcase } from './components/sections/Showcase';
import { Demo } from './components/sections/Demo';
import { Personas } from './components/sections/Personas';
import { WritingWorkflow } from './components/sections/WritingWorkflow';
import { AIFeatures } from './components/sections/AIFeatures';
import { Workflow } from './components/sections/Workflow';
import { Process } from './components/sections/Process';
import { NovelSection } from './components/sections/NovelSection';
import { Illustration } from './components/sections/Illustration';
import { CoverDesign } from './components/sections/CoverDesign';
import { CoverTemplates } from './components/sections/CoverTemplates';
import { PdfTemplates } from './components/sections/PdfTemplates';
import { Translation } from './components/sections/Translation';
import { GoogleReviews } from './components/sections/GoogleReviews';
import { Testimonials } from './components/sections/Testimonials';
import { HappyUsersCTA } from './components/sections/HappyUsersCTA';
import { MarketingTools } from './components/sections/MarketingTools';
import { AppDownload } from './components/sections/AppDownload';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Publishing } from './components/sections/Publishing';
import { RiskFreeTrial } from './components/sections/RiskFreeTrial';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ExpandFeatures />
        <Showcase />
        <Demo />
        <Process />
        <Personas />
        <WritingWorkflow />
        <AIFeatures />
        <Workflow />
        <NovelSection />
        <Illustration />
        <CoverDesign />
        <CoverTemplates />
        <PdfTemplates />
        <Translation />
        <GoogleReviews />
        <HappyUsersCTA />
        <MarketingTools />
        <AppDownload />
        <Pricing />
        <FAQ />
        <Publishing />
        <RiskFreeTrial />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
