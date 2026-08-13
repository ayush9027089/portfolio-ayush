import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Code, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  // 1. DEFINING THE DATA LOGIC
  const projectsData = [
    {
      title: "ATS Score Checker",
      description: "A web application for checking ATS scores of resumes.",
      tags: ["Spring Boot", "Java", "React", "Tailwind"],
      VideoLink: "https://drive.google.com/file/d/1-eqzn_EXN3kChNcxFnK5v7dQ3oVQ4c83/view",
      liveLink: "https://ats-checker-klvd.onrender.com/"
    },
    {
      title: "Social Media Handler",
      description: "A full-stack social media management application allowing users to schedule posts, track engagement, and manage multiple accounts.",
      tags: ["Spring Boot", "React", "MySQL", "Tailwind"],
      VideoLink: "https://drive.google.com/file/d/1jyWZGln1xRRMHI68ctqK-rlzt93lPH1h/view",
      liveLink: "https://social-media-handler-frontend.onrender.com/"
    },
    {
      title: "Microplastic Detection Model",
      description: "A machine learning model for detecting microplastics in water samples.",
      tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
      VideoLink: "https://github.com/ayush9027089/Microplastic-Detection-Model",
      liveLink: "#"
    },
    {
      title: "NVIDIA Basic ChatBOt",
      description: "A basic chatbot application using NVIDIA's NeMo framework.",
      tags: ["Python", "NVIDIA NeMo", "Machine Learning"],
      VideoLink: "#",
      liveLink: "#"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = projectsData.length;

  const goTo = useCallback((index) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // 2. AUTO-PLAY LOGIC (pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // 3. SWIPE LOGIC
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-teal-400 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Transforming ideas into digital reality.</p>
        </div>

        {/* 4. CAROUSEL WRAPPER */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors shadow-lg"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors shadow-lg"
          >
            <ChevronRight size={22} />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={index} className="w-full shrink-0 px-2 md:px-12">
                  <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-800 bg-gray-950 p-8 md:p-10 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 max-w-2xl mx-auto">

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                          <Code size={24} />
                        </div>
                        <div className="flex gap-4">
                          <a href={project.VideoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Video size={20} />
                          </a>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-8 text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-teal-200/80">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-teal-400' : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;