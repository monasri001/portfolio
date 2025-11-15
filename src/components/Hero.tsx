import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Details */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <h2 className="text-lg text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gradient">
                Monasri
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground">
                AI Tech Enthusiast
              </h3>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
            Passionate about building intelligent, scalable systems, combining AI, backend engineering, and automation to turn complex challenges into clean, efficient solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/monasri_resume.pdf" download>
                 <Button className="glass-effect hover:bg-primary/20 group">
                 <FileText className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Resume
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" className="glass-effect hover:bg-secondary/20">
                <Mail className="mr-2 h-4 w-4" />
                 Contact Me
              </Button>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/monasri001", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/monasri-mohandoss", label: "LinkedIn" },
                { icon: Mail, href: "mailto:monasrimohandoss@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative glass-effect rounded-3xl p-8 animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                   src="/monasri.jpeg"
                   alt="Monasri"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
