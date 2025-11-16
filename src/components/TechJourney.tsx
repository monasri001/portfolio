import { useEffect, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // speed
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; // reset for infinite loop
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient">
          My Tech Journey
        </h2>
        <p className="text-muted-foreground text-lg">
          Moments from my achievements & milestones
        </p>
      </div>

      {/* TRAIN-STYLE SCROLL */}
      <div
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap flex gap-4"
      >
        {/* duplicate list * 2 to make infinite loop */}
        {[...journeyPhotos, ...journeyPhotos].map((photo, i) => (
          <img
            key={i}
            src={photo.image}
            className="h-60 md:h-80 w-auto rounded-2xl object-cover glass-effect inline-block"
          />
        ))}
      </div>
    </section>
  );
};
