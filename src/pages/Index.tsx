import { SpiderWeb } from "@/components/SpiderWeb";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechJourney } from "@/components/TechJourney";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Participation } from "@/components/Participation";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <SpiderWeb />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Participation />
        <TechJourney />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
