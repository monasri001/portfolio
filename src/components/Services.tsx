import { useEffect, useRef, useState } from "react";
import { Code, Brain, Blocks, Database } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems using LLMs, RAG, and deep learning for business automation and insights.",
  },
  {
    icon: Code,
    title: "Full Stack AI Development",
    description: "Building end-to-end AI-powered applications with seamless integration of frontend, backend, machine learning models, and cloud infrastructure.",
  },
  {
    icon: Blocks,
    title: "RPA & Agentic Automation",
    description: "Designing intelligent automation workflows using RPA tools and AI agents to streamline processes, reduce manual effort, and enhance operational efficiency.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing robust data pipelines and end-to-end analytics solutions that empower organizations with real-time, actionable insights.",
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized expertise in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-card hover-lift group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:animate-glow">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
