import { useEffect, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hi! 
              I'm always excited to connect with fellow tech enthusiasts and explore innovative ideas.
            </p>

            <a
              href="mailto:monasrimohandoss@gmail.com"
              className="glass-effect p-4 rounded-xl flex items-center gap-4 hover:bg-primary/10 transition-all duration-300 hover-lift group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Mail className="h-5 w-5 text-primary group-hover:animate-bounce" />
              </div>
              <span className="text-foreground/80">
                monasrimohandoss@gmail.com
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <div
            className={`glass-card ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* REQUIRED — Web3Forms Access Key */}
              <input 
                type="hidden" 
                name="access_key" 
                value="d3a0ca8b-c2b6-4584-adf9-8de54bb4cd7b" 
              />

              {/* Optional Settings */}
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input 
                type="hidden" 
                name="subject" 
                value="New Contact Message From Portfolio" 
              />

              {/* Name */}
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="glass-effect border-white/10 focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="glass-effect border-white/10 focus:border-primary"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  className="glass-effect border-white/10 focus:border-primary"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="glass-effect border-white/10 focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full glass-effect hover:bg-primary/20 group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
