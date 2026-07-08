import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

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
                    <a href={project.VideoLink} className="text-gray-400 hover:text-white transition-colors">
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