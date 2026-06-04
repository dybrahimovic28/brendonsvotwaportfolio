import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const projectsData = [
  {
    id: "p1",
    name: "The Sun City School",
    category: "Educational Institution Website",
    website: "https://www.thesuncityschool.com/",
    description: "A modern educational platform designed to showcase academic programs, admissions information, school culture, and student engagement opportunities.",
    problem: "The institution lacked a centralized digital hub for prospective parents and students to access academic and admissions information easily.",
    solution: "Designed a mobile-first, parent-friendly interface structured around clear academic program showcases and streamlined admission steps.",
    result: "Delivered a modern, responsive website experience that improved digital visibility and accessibility for the school community.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["Admissions information", "Academic program showcase", "Mobile-first design", "Parent-friendly navigation"],
    image: "/projects/sun-city-school.webp"
  },
  {
    id: "p2",
    name: "Faith L Photography",
    category: "Photography Portfolio",
    website: "https://www.faithlphotography.com/",
    description: "A premium photography portfolio designed to showcase creative work through immersive galleries and elegant storytelling.",
    problem: "Needed an immersive visual platform that could highlight high-resolution photography without compromising load speeds or user experience.",
    solution: "Built a customized gallery system emphasizing visual storytelling and elegant minimalism to let the creative work stand out.",
    result: "Created a professional online presence that elevates the brand's premium visual presentation for potential clients.",
    technologies: ["WordPress", "Custom Design", "Responsive UI"],
    features: ["Gallery system", "Client showcase", "Mobile optimization", "Premium visual presentation"],
    image: "/projects/faith-l-photography.webp"
  },
  {
    id: "p3",
    name: "Dazi Lodge",
    category: "Hospitality Website",
    website: "https://www.dazilodge.com/",
    description: "A luxury hospitality platform built to increase online visibility, streamline bookings, and improve customer engagement.",
    problem: "The lodge required a digital presence to transition away from manual inquiries and establish trust with online tourists.",
    solution: "Developed a luxury-themed hospitality platform integrating accommodation showcases and clear contact/booking channels.",
    result: "Established a professional digital footprint that enhances customer engagement and trust.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    features: ["Accommodation showcase", "Booking information", "Contact integration", "Mobile-first experience"],
    image: "/projects/dazi-lodge.webp"
  },
  {
    id: "p4",
    name: "Complex Property",
    category: "Real Estate Platform",
    website: "https://complexproperty.net/",
    description: "A professional property management and listing platform designed to simplify property discovery and client engagement.",
    problem: "Managing and presenting property listings manually caused friction in property discovery for potential buyers and renters.",
    solution: "Engineered a robust listing platform with search functionality designed specifically for lead generation and property discovery.",
    result: "Improved digital visibility through a modern web platform, simplifying the client engagement process.",
    technologies: ["WordPress", "PHP", "Responsive Design"],
    features: ["Property listings", "Search functionality", "Lead generation", "Responsive interface"],
    image: "/projects/complex-property.webp"
  },
  {
    id: "p5",
    name: "Wamulungwe Lodge",
    category: "Tourism & Hospitality Website",
    website: "https://wamulungwelodge.com/",
    description: "A hospitality platform focused on promoting accommodation services and enhancing online customer engagement.",
    problem: "The lodge lacked a centralized platform to communicate tourism information and showcase accommodations to a wider audience.",
    solution: "Created a welcoming digital interface that highlights local tourism information alongside detailed room showcases.",
    result: "Delivered a modern responsive website experience to attract visitors and support the local hospitality ecosystem.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Accommodation showcase", "Tourism information", "Contact integration", "Mobile responsiveness"],
    image: "/projects/wamulungwe-lodge.webp"
  },
  {
    id: "p6",
    name: "Kizya Lodge",
    category: "Hospitality Website",
    website: "https://www.kizyalodge.com/",
    description: "A modern lodge website designed to showcase facilities, attract visitors, and increase bookings.",
    problem: "Needed a competitive digital presence to showcase premium facilities to international and domestic travelers.",
    solution: "Designed an elegant, mobile-first user experience that prioritizes high-quality facility imagery and booking accessibility.",
    result: "Created a professional online presence for the business that strengthens its brand in the hospitality market.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Room showcase", "Booking information", "Mobile-first design", "Elegant user experience"],
    image: "/projects/kizya-lodge.webp"
  },
  {
    id: "p7",
    name: "BK Successful Events",
    category: "Events Management Platform",
    website: "http://bksuccessfulevents.com/",
    description: "A professional events management website designed to promote services and generate business leads.",
    problem: "The event management business needed a centralized portfolio to showcase past successes and capture new leads securely.",
    solution: "Implemented a responsive service showcase emphasizing visual proof of past events and seamless contact integration.",
    result: "Delivered a reliable digital platform tailored for lead generation and professional brand representation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Service showcase", "Lead generation", "Contact integration", "Responsive design"],
    image: "/projects/bk-successful-events.webp"
  }
];

const AUTO_PLAY_INTERVAL = 7000;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isPaused, setIsPaused] = useState(false);
  const progressValue = useMotionValue(0);
  const progressWidth = useTransform(progressValue, v => `${v}%`);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  


  const activeProject = projectsData[activeIndex];

  // Image Preloader
  useEffect(() => {
    const nextIdx = (activeIndex + 1) % projectsData.length;
    const prevIdx = (activeIndex - 1 + projectsData.length) % projectsData.length;
    [projectsData[nextIdx].image, projectsData[prevIdx].image].forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [activeIndex]);

  const advanceSlide = useCallback((newDir: number, newIndex?: number) => {
    setDirection(newDir);
    setActiveIndex(prev => {
      if (newIndex !== undefined) return newIndex;
      let next = prev + newDir;
      if (next < 0) next = projectsData.length - 1;
      if (next >= projectsData.length) next = 0;
      return next;
    });
    progressValue.set(0);
  }, [progressValue]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') advanceSlide(1);
      if (e.key === 'ArrowLeft') advanceSlide(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [advanceSlide]);

  // Autoplay & Progress Loop
  useEffect(() => {
    if (isPaused || !isDesktop) {
      return;
    }
    
    const currentProgress = progressValue.get();
    const remainingTime = AUTO_PLAY_INTERVAL * (1 - currentProgress / 100);
    
    if (remainingTime <= 0) {
      advanceSlide(1);
      return;
    }
    
    const controls = animate(progressValue, 100, {
      duration: remainingTime / 1000,
      ease: "linear",
      onComplete: () => {
        advanceSlide(1);
      }
    });
    
    return () => controls.stop();
  }, [activeIndex, isPaused, advanceSlide, isDesktop, progressValue]);

  // Pause on tab inactivity
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Framer motion variants for content sync
  const contentVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.1 }
    },
    exit: { opacity: 0, y: -20, filter: 'blur(10px)', transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } }
  };

  // Mobile variants (simple swipe)
  const swipeVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: (dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0, transition: { duration: 0.5 } })
  };

  return (
    <section 
      id="projects" 
      style={{ background: 'var(--bg-main)', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '5rem', flexShrink: 0 }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Case Studies</h2>
        <p className="section-subtitle" style={{ margin: 0 }}>Real-world digital experiences engineered for impact.</p>
      </div>

      {isDesktop ? (
        // DESKTOP MAGIC SLIDER
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0 2rem 2rem' }}>
          
          <div style={{ display: 'flex', gap: '4rem', flex: 1, alignItems: 'stretch' }}>
            
            {/* Left: Hero Image (Layout Animated) */}
            <div style={{ flex: '1', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={activeProject.id}
                  layoutId={`project-image-${activeProject.id}`}
                  style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={activeProject.image} alt={activeProject.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-main) 0%, transparent 40%)', opacity: 0.7 }} />
                </motion.div>
              </AnimatePresence>
              
              {/* Progress & Controls inside Image area */}
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 0.8, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)' }}
                    >
                      {String(activeIndex + 1).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.25rem', paddingBottom: '0.4rem' }}>
                    / {String(projectsData.length).padStart(2, '0')}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => advanceSlide(-1)} className="btn btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(13,13,13,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <ChevronLeft size={24} color="var(--text-primary)" />
                  </button>
                  <button onClick={() => advanceSlide(1)} className="btn btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(13,13,13,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <ChevronRight size={24} color="var(--text-primary)" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Content Synchronization */}
            <div style={{ flex: '1', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ width: '100%' }}
                >
                  <motion.span variants={itemVariants} style={{ color: 'var(--accent-blue)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                    {activeProject.category}
                  </motion.span>
                  
                  <motion.h3 variants={itemVariants} style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                    {activeProject.name}
                  </motion.h3>
                  
                  <motion.p variants={itemVariants} style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '90%' }}>
                    {activeProject.description}
                  </motion.p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <motion.div variants={itemVariants}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Challenge</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{activeProject.problem}</p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Solution</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{activeProject.solution}</p>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Result</strong>
                    <p style={{ color: 'var(--primary-gold)', fontSize: '1rem', margin: 0, fontWeight: 500 }}>{activeProject.result}</p>
                  </motion.div>

                  <motion.div variants={itemVariants} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {activeProject.technologies.map(tech => (
                      <span key={tech} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem' }}>
                    <a href={activeProject.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                      Visit Website <ExternalLink size={18} />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div style={{ marginTop: '3rem', height: '2px', background: 'rgba(255,255,255,0.1)', width: '100%', position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: progressWidth, background: 'var(--primary-gold)' }} />
          </div>

          {/* Thumbnail Strip */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', height: '120px' }}>
            {projectsData.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div 
                  key={project.id}
                  onClick={() => {
                    if (idx !== activeIndex) advanceSlide(idx > activeIndex ? 1 : -1, idx);
                  }}
                  style={{
                    flex: isActive ? 1.5 : 1,
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: isActive ? 'default' : 'pointer',
                    border: isActive ? '2px solid var(--primary-gold)' : '2px solid transparent',
                    transition: 'flex 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.3s ease, border-color 0.3s ease',
                    filter: isActive ? 'brightness(1) saturate(1.2)' : 'brightness(0.5) saturate(0.5)',
                  }}
                  className="thumbnail-item"
                >
                  {/* We only layout animate the non-active ones if we wanted swapping, but here we just render the image */}
                  {!isActive && (
                    <motion.div
                      layoutId={`project-image-${project.id}`}
                      style={{ width: '100%', height: '100%' }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                  )}
                  {isActive && (
                     <img src={project.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  
                  {!isActive && (
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', transition: 'background 0.3s ease' }} className="thumb-overlay" />
                  )}
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', opacity: isActive ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                    <span style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{project.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <style>{`
            .thumbnail-item:hover { filter: brightness(0.8) saturate(0.8) !important; }
            .thumbnail-item:hover .thumb-overlay { background: rgba(0,0,0,0.1) !important; }
          `}</style>
        </div>
      ) : (
        // MOBILE SWIPEABLE CAROUSEL
        <div style={{ padding: '0 1.5rem 3rem' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', background: 'var(--bg-surface)', paddingBottom: '2rem' }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={swipeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset }) => {
                  const swipe = offset.x;
                  if (swipe < -50) advanceSlide(1);
                  else if (swipe > 50) advanceSlide(-1);
                }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                  <img src={activeProject.image} alt={activeProject.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.875rem', color: 'var(--primary-gold)', fontWeight: 600 }}>
                    {String(activeIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                    {activeProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{activeProject.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{activeProject.description}</p>
                  
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {activeProject.technologies.slice(0, 3).map(tech => (
                      <span key={tech} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href={activeProject.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', padding: '0 1.5rem' }}>
              <button onClick={() => advanceSlide(-1)} className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}><ChevronLeft size={20} /></button>
              <button onClick={() => advanceSlide(1)} className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
