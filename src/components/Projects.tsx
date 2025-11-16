import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    name:"Multi Agent github PR review System",
    tech: "Generative AI, Agentic automation",
    stack: ["Python", "FastAPI", "Streamlit", "LangChain", "CrewAI", "GitHub API"],
    description: "Built a CrewAI multi-agent system that reviews GitHub PRs using LLaMA models, delivering inline insights through a real-time Streamlit interface.",
    github: "https://github.com/monasri001/Multi-Agent-Automatic-PR-review-System",
    status: "Built",
  },
  {
    name: "Business Plan Generator using Fine-tuned LLM",
    tech: "Generative AI, RAG",
    stack: ["Python", "Langchain", "Pinecone", "Llama", "FastAPI", "Streamlit"],
    description:
      "Developed an AI tool for automated business plan generation with market and financial insights. Achieved 70% faster drafting with customizable outputs.",
    github: "https://github.com/monasri001/Business-Plan-Generator",
  },
  {
    name: "Electronic Health Record Maintenance",
    tech: "Blockchain, Predictive System",
    stack: ["React", "TensorFlow", "Flask", "MongoDB", "Node.js", "Hardhat"],
    description:
      "Developed a blockchain-based Web3 DApp for secure electronic health records with AI for real-time threat detection and access control.",
    github: "https://github.com/monasri001/Securing_electronic_health_record",
  },
  {
    name: "Upwork Job Scraper Agent",
    tech: "AI Agent Automation",
    stack: ["n8n", "Groq LLM", "JavaScript", "RapidAPI", "Airtable"],
    description:
      "Built an automation agent to scrape and filter freelance jobs. Achieved 90% efficiency in job relevance filtering through custom workflows.",
    github: "https://github.com/monasri001/Upwork-Job-Scraper-Agent-using-n8n-Groq",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions I've built
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.name}
              className={`glass-card hover-lift group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-primary font-medium">{project.tech}</p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full glass-effect"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-full glass-effect">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                
                {project.github !== "#" && (
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-effect hover:bg-primary/20 group/btn"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-spin" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button className="glass-effect hover:bg-primary/20 group">
              View All Projects
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
