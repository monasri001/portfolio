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
      <footer className="py-8 text-center text-muted-foreground border-t border-white/10">
        <div className="container mx-auto px-4">
          <p>© 2024 Monasri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
