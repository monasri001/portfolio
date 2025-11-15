import { useEffect, useRef, useState } from "react";
import { Trophy, Award, Users } from "lucide-react";

const data = {
  hackathon: {
    icon: Trophy,
    title: "Hackathon & Competition",
    items: [
      "1st Prize – PALS RSW 72-Hour Project Hackathon, IIT Madras (2023)",
      "Finalist – Innowah’2025, IIT Madras – Securing Electronic Health Records using Blockchain & AI",
      "Top 10 Finalist – HackTamizhagam 24-Hour Hackathon (2024)",
      "72-Hour Hackathon – VIT Chennai (2025) – Alumni Website for Colleges",
      "3rd Prize – Coding & Debugging – MIT Pondicherry (2024)",
      "AWS Community Event – St. Joseph’s College, OMR",
      "FOSS Meetup – Pondicherry (2024)",
    ],
  },

  certifications: {
    icon: Award,
    title: "Certifications",
    items: [
      "Cloud Computing – NPTEL",
      "Python & DBMS – Udemy",
      "AI Agents – Udemy",
      "Google Data Analytics – Coursera",
    ],
  },

  activities: {
    icon: Users,
    title: "Activities",
    items: [
      "Technical Writer – Keploy",
      "Student Dev Champion – UiPath",
      "Cglug – Open Source Activist",
    ],
  },
};

export const Participation = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="activities" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Participation & Activities
          </h2>
          <p className="text-muted-foreground text-lg">
            Achievements, Certifications & Community Work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT LARGE CARD */}
          <CardBlock 
            icon={data.hackathon.icon}
            title={data.hackathon.title}
            items={data.hackathon.items}
            isVisible={isVisible}
          />

          {/* RIGHT TWO SMALL CARDS */}
          <div className="flex flex-col gap-6">
            <CardBlock 
              icon={data.certifications.icon}
              title={data.certifications.title}
              items={data.certifications.items}
              isVisible={isVisible}
            />

            <CardBlock 
              icon={data.activities.icon}
              title={data.activities.title}
              items={data.activities.items}
              isVisible={isVisible}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const CardBlock = ({ icon: Icon, title, items, isVisible }) => {
  return (
    <div className={`glass-card p-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      
      {/* ICON + TITLE ROW */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* CONTENT BELOW */}
      <ul className="space-y-2 pl-1">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <span className="text-primary">•</span>
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
};
