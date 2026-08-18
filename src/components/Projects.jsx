import { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Code, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "ATS Score Checker",
      description: "A web application for checking ATS scores of resumes with automated keyword optimization insights.",
      tags: ["Spring Boot", "Java", "React", "Tailwind CSS"],
      VideoLink: "https://drive.google.com/file/d/1-eqzn_EXN3kChNcxFnK5v7dQ3oVQ4c83/view",
      liveLink: "https://ats-checker-klvd.onrender.com/"
    },
    {
      title: "Social Media Handler",
      description: "A full-stack social media management platform allowing users to schedule posts, track engagement metrics, and manage multiple accounts.",
      tags: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
      VideoLink: "https://drive.google.com/file/d/1jyWZGln1xRRMHI68ctqK-rlzt93lPH1h/view",
      liveLink: "https://social-media-handler-frontend.onrender.com/"
    },
    {
      title: "Microplastic Detection Model",
      description: "A computer vision & machine learning pipeline engineered to identify and categorize microplastics in aquatic samples.",
      tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
      VideoLink: "https://github.com/ayush9027089/Microplastic-Detection-Model",
      liveLink: ""
    },
    {
      title: "NVIDIA NeMo Conversational Bot",
      description: "An interactive AI agent built leveraging NVIDIA's NeMo conversational framework for natural language responses.",
      tags: ["Python", "NVIDIA NeMo", "Machine Learning", "NLP"],
      VideoLink: "",
      liveLink: ""
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

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

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
    <div id="projects" className="w-full bg-black px-4 py-20 text-gray-200">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-teal-400">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Transforming ideas into scalable digital reality.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-800 bg-gray-900/90 p-3 text-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50 hover:text-teal-400 hover:shadow-teal-500/10 md:-left-7"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-gray-800 bg-gray-900/90 p-3 text-gray-300 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50 hover:text-teal-400 hover:shadow-teal-500/10 md:-right-7"
          >
            <ChevronRight size={22} />
          </button>

          {/* Sliding Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projectsData.map((project, index) => (
                <div key={index} className="w-full shrink-0 px-2 py-4">
                  <div className="group relative flex min-h-[380px] flex-col justify-between rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 md:p-10">
                    
                    <div>
                      {/* Card Header & Action Links */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="rounded-lg bg-teal-500/10 p-3 text-teal-400">
                          <Code size={24} />
                        </div>
                        <div className="flex items-center gap-3">
                          {project.VideoLink && project.VideoLink !== "#" && (
                            <a
                              href={project.VideoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Watch demo video"
                              className="rounded-lg border border-gray-800 bg-gray-800/60 p-2.5 text-gray-400 transition-all duration-200 hover:border-teal-500/40 hover:text-teal-400"
                            >
                              <Video size={18} />
                            </a>
                          )}
                          {project.liveLink && project.liveLink !== "#" && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit live demo"
                              className="rounded-lg border border-gray-800 bg-gray-800/60 p-2.5 text-gray-400 transition-all duration-200 hover:border-teal-500/40 hover:text-teal-400"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-200 group-hover:text-teal-400">
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Skill Badges */}
                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-gray-800 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-colors duration-200 group-hover:border-teal-500/20"
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

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2.5">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-teal-400' : 'w-2.5 bg-gray-800 hover:bg-gray-700'
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