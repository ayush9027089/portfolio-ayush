import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  // --- EXPERIENCE DATA LOGIC ---
  // Using an array makes it easy to add or edit timeline items later.
  const experiences = [
    {
      id: 1,
      role: "Lead Developer",
      company: "SocialSync Application",
      date: "Jan 2026 - Present",
      description: "Developing a cross-platform social media manager integrating multiple OAuth2 APIs (LinkedIn, YouTube, Pinterest). Architecting the backend with Spring Boot and MongoDB to handle complex user data synchronization.",
      skills: ["Spring Boot", "React", "MongoDB", "OAuth2"]
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "PlacementEase",
      date: "Oct 2025 - Dec 2025",
      description: "Designed and built an AI-integrated resume shortlisting and management system for college placement cells. Engineered normalized database schemas (BCNF) using MySQL and developed a clean, responsive frontend.",
      skills: ["React", "Node.js", "MySQL", "AI Integration"]
    },
    {
      id: 3,
      role: "Team Leader & Developer",
      company: "Team Ashankhya (Project Sanjeevani)",
      date: "Sep 2025 - Nov 2025",
      description: "Led a cross-functional team of CS and Electronics students to develop a sensor-based prototype for detecting microplastic pollution. Integrated ESP32 microcontrollers with machine learning models for real-time environmental data analysis.",
      skills: ["Machine Learning", "IoT (ESP32)", "Python", "Hardware Integration"]
    }
  ];

  return (
    <div className="w-full bg-black text-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* === HEADING SECTION === */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Experience & <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400">
            My journey through building scalable software and leading technical teams.
          </p>
        </div>

        {/* === TIMELINE SECTION === */}
        <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-4 border-black bg-teal-500 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] transition-shadow duration-300"></div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8 hover:border-teal-500/30 transition-colors duration-300 shadow-lg">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  {/* Role and Company */}
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-teal-400 hidden sm:block" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-teal-400 font-medium mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/80 w-fit px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    {exp.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills/Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}

        </div> {/* End Timeline */}
        
      </div>
    </div>
  );
};

export default Experience;