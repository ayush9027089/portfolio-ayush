import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  // 1. DEFINING THE DATA LOGIC
  const projectsData = [
    {
      title: "Microplastic Sensor",
      description: "A hardware-based sensor utilizing ML models for image analysis to detect microplastics in real-time.",
      tags: ["Python", "OpenCV", "IoT", "React"],
      githubLink: "https://github.com/ayush9027089/Microplastics",
      liveLink: "https://www.linkedin.com/in/ayushkrdubey"
    },
    {
      title: "PlacementEase",
      description: "A comprehensive Spring Boot and React application for managing student placements and simplifying college recruitment.",
      tags: ["Spring Boot", "React", "MySQL", "Tailwind"],
      githubLink: "#",
      liveLink: "https://www.linkedin.com/in/ayushkrdubey"
    },
    {
      title: "Team Ashankhya Portfolio",
      description: "Official team website for hackathon group Ashankhya, featuring member showcases and project timelines.",
      tags: ["React", "Framer Motion", "UI/UX"],
      githubLink: "#",
      liveLink: "https://www.linkedin.com/in/ayushkrdubey"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-teal-400 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Transforming ideas into digital reality.</p>
        </div>

        {/* 2. RENDERING LOGIC (The Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 3. MAPPING LOGIC */}
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-800 bg-gray-950 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              
              {/* Card Content */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                    <Code size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.githubLink} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.liveLink} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags Logic */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-teal-200/80">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;