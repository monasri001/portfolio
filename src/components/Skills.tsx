import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "R"],
  },
  {
    category: "AI & ML",
    skills: ["Python", "TensorFlow", "PyTorch", "LangChain", "SciKit-learn", "Hugging Face", "Streamlit"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Pinecone", "AWS", "Google Cloud", "Airtable"],
  },
  {
    category: "Tools & Others",
    skills: ["Excel", "Git", "Postman", "Docker", "n8n", "Power BI", "Selenium", "UiPath", "CrewAI"],
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={category.category}
              className={`glass-card p-6 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
