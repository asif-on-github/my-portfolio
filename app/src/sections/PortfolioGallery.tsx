import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Eye } from 'lucide-react';
import { portfolioConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const PortfolioGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioConfig.items
    : portfolioConfig.items.filter(item => item.category === activeCategory);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    // Grid items entrance animation
    const items = grid.querySelectorAll('.portfolio-item');
    items.forEach((item, index) => {
      const itemTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      itemTl.fromTo(
        item,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: (index % 3) * 0.1,
          ease: 'expo.out',
        }
      );

      if (itemTl.scrollTrigger) {
        triggersRef.current.push(itemTl.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, [filteredItems]);

  if (!portfolioConfig.items.length) return null;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
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
        <div className="mb-12 text-center">
          {portfolioConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
                {portfolioConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(portfolioConfig.headingMain || portfolioConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
              {portfolioConfig.headingMain}<span className="text-pink">{portfolioConfig.headingAccent}</span>
            </h2>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioConfig.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              data-cursor-hover
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item group relative overflow-hidden bg-white/5 border border-white/10 hover:border-pink/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button
                      className="p-4 bg-pink text-black hover:bg-white transition-colors duration-300"
                      data-cursor-hover
                    >
                      <Eye className="w-6 h-6" />
                    </button>
                    <button
                      className="p-4 bg-white text-black hover:bg-pink transition-colors duration-300"
                      data-cursor-hover
                    >
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-pink text-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-pink transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-white/50 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-1 bg-white/5 text-white/40 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-6 font-display font-black text-[12rem] text-white/[0.02] leading-none pointer-events-none select-none">
        WORKS
      </div>
    </section>
  );
};

export default PortfolioGallery;
