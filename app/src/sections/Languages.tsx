import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe } from 'lucide-react';
import { languagesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Languages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    // Cards entrance animation
    const cardElements = cards.querySelectorAll('.language-card');
    cardElements.forEach((card, index) => {
      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      cardTl.fromTo(
        card,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'expo.out',
        }
      );

      if (cardTl.scrollTrigger) {
        triggersRef.current.push(cardTl.scrollTrigger);
      }
    });

    // Progress bar animation
    const progressBars = cards.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => {
      const barTl = gsap.timeline({
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      const targetWidth = bar.getAttribute('data-width') || '0%';
      barTl.fromTo(
        bar,
        { width: '0%' },
        {
          width: targetWidth,
          duration: 1,
          ease: 'expo.out',
        }
      );

      if (barTl.scrollTrigger) {
        triggersRef.current.push(barTl.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  if (!languagesConfig.languages.length) return null;

  return (
    <section
      ref={sectionRef}
      id="languages"
      className="relative w-full bg-black py-24 overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-pink" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-12 text-center">
          {languagesConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
                {languagesConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(languagesConfig.headingMain || languagesConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
              {languagesConfig.headingMain}<span className="text-pink">{languagesConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Language cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {languagesConfig.languages.map((language, index) => (
            <div
              key={index}
              className="language-card bg-white/5 border border-white/10 p-6 hover:border-pink/50 transition-all duration-500 group"
            >
              {/* Flag */}
              <div className="text-4xl mb-4">{language.flag}</div>

              {/* Language name */}
              <h3 className="font-display font-bold text-xl text-white mb-1">
                {language.name}
              </h3>

              {/* Level */}
              <p className="font-body text-pink text-sm uppercase tracking-wider mb-4">
                {language.level}
              </p>

              {/* Progress bar */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="progress-bar absolute top-0 left-0 h-full bg-pink rounded-full"
                  data-width={`${language.percentage}%`}
                />
              </div>

              {/* Percentage */}
              <div className="flex items-center justify-between mt-2">
                <span className="font-body text-white/40 text-sm">Proficiency</span>
                <span className="font-display font-bold text-white">{language.percentage}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global communication note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-pink/10 border border-pink/20">
            <Globe className="w-5 h-5 text-pink" />
            <span className="font-body text-white/60 text-sm">
              Multilingual capabilities for global communication
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
