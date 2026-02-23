import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experienceConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    // Cards entrance animation
    const cardElements = cards.querySelectorAll('.experience-card');
    cardElements.forEach((card, index) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      cardTl.fromTo(
        card,
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          rotateY: index % 2 === 0 ? -15 : 15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          ease: 'expo.out',
        }
      );

      if (cardTl.scrollTrigger) {
        triggersRef.current.push(cardTl.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  if (!experienceConfig.experiences.length) return null;

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-full bg-black py-24 overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-pink" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          {experienceConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
                {experienceConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(experienceConfig.headingMain || experienceConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
              {experienceConfig.headingMain}<span className="text-pink">{experienceConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Experience cards */}
        <div ref={cardsRef} className="max-w-5xl mx-auto space-y-8">
          {experienceConfig.experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card relative bg-white/5 border border-white/10 p-8 hover:border-pink/50 transition-all duration-500 group"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="grid md:grid-cols-3 gap-6">
                {/* Role & Organization */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 text-pink mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-body text-sm uppercase tracking-wider">{exp.role}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {exp.organization}
                  </h3>
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description & Contributions */}
                <div className="md:col-span-2">
                  <p className="font-body text-white/60 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.contributions.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-body text-pink text-sm uppercase tracking-wider mb-2">
                        Key Contributions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.contributions.map((contribution, cIndex) => (
                          <span
                            key={cIndex}
                            className="flex items-center gap-1 px-3 py-1 bg-pink/10 text-white/80 text-sm rounded-full"
                          >
                            <CheckCircle className="w-3 h-3 text-pink" />
                            {contribution}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 right-6 font-display font-black text-[12rem] text-white/[0.02] leading-none pointer-events-none select-none">
        EXPERIENCE
      </div>
    </section>
  );
};

export default Experience;
