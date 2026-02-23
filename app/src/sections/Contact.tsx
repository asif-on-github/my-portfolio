import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Linkedin, Send, CheckCircle, Clock, Download, Calendar } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Content entrance animation
    const elements = content.querySelectorAll('.contact-element');
    elements.forEach((el, index) => {
      const elTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      elTl.fromTo(
        el,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'expo.out',
        }
      );

      if (elTl.scrollTrigger) {
        triggersRef.current.push(elTl.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-black py-24 overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-pink" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-pink" />
      </div>

      <div ref={contentRef} className="relative z-10 w-full px-6 lg:px-12">
        {/* Section header */}
        <div className="contact-element mb-16 text-center">
          {contactConfig.sectionLabel && (
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-pink" />
              <span className="font-body text-pink text-sm uppercase tracking-[0.3em]">
                {contactConfig.sectionLabel}
              </span>
              <div className="w-12 h-px bg-pink" />
            </div>
          )}
          {(contactConfig.headingMain || contactConfig.headingAccent) && (
            <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tight">
              {contactConfig.headingMain}<span className="text-pink">{contactConfig.headingAccent}</span>
            </h2>
          )}
          {contactConfig.description && (
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mt-6">
              {contactConfig.description}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="contact-element space-y-8">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white/5 border border-white/10 p-6 hover:border-pink/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-pink/10 text-pink">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-body text-white/40 text-sm uppercase tracking-wider">Email</span>
                </div>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="font-body text-white hover:text-pink transition-colors duration-300"
                  data-cursor-hover
                >
                  {contactConfig.email}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-white/5 border border-white/10 p-6 hover:border-pink/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-pink/10 text-pink">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-body text-white/40 text-sm uppercase tracking-wider">LinkedIn</span>
                </div>
                <a
                  href={`https://linkedin.com/in/${contactConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white hover:text-pink transition-colors duration-300"
                  data-cursor-hover
                >
                  {contactConfig.linkedin}
                </a>
              </div>

              {/* Location */}
              <div className="bg-white/5 border border-white/10 p-6 hover:border-pink/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-pink/10 text-pink">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-body text-white/40 text-sm uppercase tracking-wider">Location</span>
                </div>
                <p className="font-body text-white">{contactConfig.location}</p>
              </div>

              {/* Availability */}
              <div className="bg-white/5 border border-white/10 p-6 hover:border-pink/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-pink/10 text-pink">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-body text-white/40 text-sm uppercase tracking-wider">Availability</span>
                </div>
                <p className="font-body text-white">{contactConfig.availability}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 px-6 py-4 bg-pink text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300"
                data-cursor-hover
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                className="flex items-center gap-3 px-6 py-4 bg-white/5 text-white border border-white/10 font-display font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-pink transition-all duration-300"
                data-cursor-hover
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-element">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Send Me a Message
              </h3>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-4 bg-pink/10 rounded-full mb-4">
                    <CheckCircle className="w-12 h-12 text-pink" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-body text-white/60">
                    I'll respond within 24 hours
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-white/40 text-sm uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-body focus:border-pink focus:outline-none transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-white/40 text-sm uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-white/20 text-white font-body focus:border-pink focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-white/40 text-sm uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white font-body focus:border-pink focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-white/40 text-sm uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white font-body focus:border-pink focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-pink text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300"
                    data-cursor-hover
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 right-6 font-display font-black text-[12rem] text-white/[0.02] leading-none pointer-events-none select-none">
        CONNECT
      </div>
    </section>
  );
};

export default Contact;
