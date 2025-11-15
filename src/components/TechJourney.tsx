import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Your real images from public folder
const journeyPhotos = [
  { id: 1, image: "/Innowah IIT Madras.jpeg" },
  { id: 2, image: "/innowah finals.jpeg" },
  { id: 3, image: "/Kalam Young Achiver Award.jpeg" },
  { id: 4, image: "/vit hackathon.jpeg" },
  { id: 5, image: "/Tinkathon IIT Madras.jpeg" },
  { id: 6, image: "/srm hackquest.jpeg" },
  { id: 7, image: "/foss united.jpeg" },
  { id: 8, image: "/cglug.jpeg" },
  { id: 9, image: "/RSW workshop.jpeg" },
  { id: 10, image: "/tngss.jpeg" },
  { id: 11, image: "/iit.jpeg" },
  { id: 12, image: "/iit rsw.jpeg" },

];

export const TechJourney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % journeyPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? journeyPhotos.length - 1 : prev - 1
    );

  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % journeyPhotos.length);

  return (
    <section ref={sectionRef} className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Tech Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Moments from my achievements & milestones
          </p>
        </div>

        <div
          className={`relative max-w-5xl mx-auto ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Main Slider */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass-card">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {journeyPhotos.map((photo) => (
                <div key={photo.id} className="min-w-full h-full relative">
                  <img
                    src={photo.image}
                    alt="Journey Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect hover:bg-primary/20 group z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect hover:bg-primary/20 group z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {journeyPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
