import { useState } from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SpiderWeb } from "@/components/SpiderWeb";
import { Navigation } from "@/components/Navigation";

const allProjects = [
  {
    name: "Business Plan Generator using Fine-tuned LLM",
    tech: "Business Intelligence, Generative AI, RAG",
    stack: ["Python", "Langchain", "Pinecone", "Llama", "Postgres", "FastAPI", "Streamlit", "Render"],
    description: "Developed an AI tool for automated business plan generation with market and financial insights. Fine-tuned LLaMA using LangChain and Hugging Face for business intelligence. Achieved 70% faster drafting with Excel-ready customizable outputs.",
    github: "https://github.com/monasri001/Business-Plan-Generator",
  },
  {
    name: "Electronic Health Record Maintenance",
    tech: "Blockchain, Predictive System",
    stack: ["Python", "React", "TensorFlow", "Flask", "MongoDB", "Google Cloud", "Node.js", "Next.js", "Ganache", "MetaMask", "Hardhat"],
    description: "Developed a blockchain-based Web3 DApp for secure electronic health records. Integrated AI for real-time threat detection and access control. Ensured patient data integrity and compliance through decentralized architecture.",
    github: "https://github.com/monasri001/Securing_electronic_health_record",
  },
  {
    name: "Airline Flight Delay Prediction using XGBoost",
    tech: "Predictive System",
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Power BI"],
    description: "Built an AI model to predict flight delays using historical, weather, and airport data. Optimized XGBoost through feature engineering for improved scheduling accuracy. Enhanced operational efficiency by reducing potential flight delays.",
    github: "",
  },
  {
    name: "Upwork Job Scraper Agent using n8n & Groq",
    tech: "AI Agent Automation, Web Scraping",
    stack: ["n8n", "Groq LLM", "JavaScript", "RapidAPI", "Airtable", "Node.js"],
    description: "Built an automation agent to scrape and filter freelance jobs using n8n and Groq LLM. Streamlined job organization and client outreach with Airtable integration. Achieved 90% efficiency in job relevance filtering through custom workflows.",
    github: "https://github.com/monasri001/Upwork-Job-Scraper-Agent-using-n8n-Groq",
  },
  {
    name: "Automated Cloud Resource Recommendation System",
    tech: "Cloud Computing, Data Analytics",
    stack: ["React", "TypeScript", "Python", "FastAPI", "Supabase", "Cloud Pricing APIs"],
    description: "Built an AI tool that analyses workload queries to recommend optimal setups across AWS, Azure & GCP. Used XGBoost and logic to predict cost-performance and rank configurations efficiently. Created dashboards for real-time recommendations, cost analysis, and simulations.",
    github: "https://github.com/monasri001/sky-fit-finder",
  },
  {
    name: "Solar Power Output Prediction on Large Scale Productions",
    tech: "Predictive System, Business Intelligence",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Render"],
    description: "Built regression models (Linear Regression, Random Forest) to predict solar output (R² = 0.91). Improved forecasting accuracy by 75% for sustainable energy optimization.",
    github: "https://github.com/monasri001/Solar_Power_Output_Prediction_Using_Linear_Regression",
  },
  {
    name: "Smart Cylinder Monitoring System",
    tech: "AI, IoT",
    stack: ["Python", "IoT Sensors", "Arduino", "Flask", "Google Cloud", "MQTT"],
    description: "Developed an AI + IoT system for real-time gas level tracking and predictive refill alerts.",
    github: "",
  },
  {
    name: "Quantum Gates Optimization",
    tech: "Inferential Statistics, Generative AI",
    stack: ["Python", "Qiskit", "Matplotlib", "Scikit-learn"],
    description: "Developed a quantum gate optimization system using Qiskit to design efficient quantum circuits.",
    github: "https://github.com/monasri001/Quantum-Gates-optimization-using-AI",
  },
  {
    name: "Sentimental Analysis using BERT",
    tech: "NLP, LLM",
    stack: ["Python", "MongoDB", "Hugging Face Transformer"],
    description: "Built a sentiment analysis model using BERT to classify text into multiple sentiment labels.",
    github: "https://github.com/monasri001/Sentimental-Analysis-using-BERT",
  },
  {
    name:"Multi Agent github PR review System",
    tech: "Generative AI, Agentic automation",
    stack: ["Python", "FastAPI", "Streamlit", "LangChain", "CrewAI", "GitHub API"],
    description: "Built a CrewAI multi-agent system that reviews GitHub PRs using LLaMA models.",
    github: "https://github.com/monasri001/Multi-Agent-github-PR-review-System",
  }
];

export default function AllProjects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI & Machine Learning", "Blockchain", "Cloud & IoT", "Data Analytics"];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => {
        if (filter === "AI & Machine Learning") return project.tech.toLowerCase().includes("ai") || project.tech.toLowerCase().includes("llm") || project.tech.toLowerCase().includes("nlp");
        if (filter === "Blockchain") return project.tech.toLowerCase().includes("blockchain");
        if (filter === "Cloud & IoT") return project.tech.toLowerCase().includes("cloud") || project.tech.toLowerCase().includes("iot");
        if (filter === "Data Analytics") return project.tech.toLowerCase().includes("predictive") || project.tech.toLowerCase().includes("analytics");
        return true;
      });

  return (
    <div className="min-h-screen relative">
      <SpiderWeb />
      <Navigation />

      <div className="container mx-auto px-4 py-20">

        <Link to="/">
          <Button variant="outline" className="glass-effect hover:bg-primary/20 mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">All Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my complete portfolio of innovative AI, blockchain, and full-stack projects
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`glass-effect ${filter === category ? "bg-primary/20" : "hover:bg-primary/10"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.name}
              className="glass-card hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-4">
                
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {project.name}
                </h3>

                <p className="text-sm text-primary font-medium">{project.tech}</p>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-lg glass-effect text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.stack.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-lg glass-effect text-foreground/70">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-effect hover:bg-primary/20 group/btn flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-spin" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}

      </div>

      
    </div>
  );
}
