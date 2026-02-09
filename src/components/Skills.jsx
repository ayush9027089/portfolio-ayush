import React from 'react'

const Skills = () => {
  return (
    <div className="w-full bg-black text-gray-200 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* === TECHNICAL SKILLS SECTION (NEW) === */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">
            A glimpse into my toolbox of technologies and skills.
          </p>
        </div>

        {/* Skills Grid: 2 columns on medium screens, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* --- Frontend Development Card --- */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center gap-4 mb-6">
              {/* Icon */}
              <div className="rounded-lg bg-teal-500/10 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25L12 9.75l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21m-7.5-6L12 17.25l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21m-7.5-6L12 17.25l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21m-7.5-6L12 17.25l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Frontend Development</h3>
            </div>
            {/* Skill list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                {/* <FaHtml5 className="text-teal-400" /> HTML */}
                <span className="text-teal-400">&lt;&gt;</span> HTML
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiTailwindcss className="text-teal-400" /> Tailwind CSS */}
                <span className="text-teal-400">▧</span> Tailwind CSS
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <FaReact className="text-teal-400" /> React */}
                <span className="text-teal-400">&lt;&gt;</span> React
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiNextdotjs className="text-teal-400" /> Next.js */}
                <span className="text-teal-400">&lt;&gt;</span> Next.js
              </p>
            </div>
          </div>

          {/* --- Backend Development Card --- */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center gap-4 mb-6">
              {/* Icon */}
              <div className="rounded-lg bg-teal-500/10 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Backend Development</h3>
            </div>
            {/* Skill list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                {/* <FaNodeJs className="text-teal-400" /> Node.js */}
                <span className="text-teal-400">&lt;&gt;</span> Node.js
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiExpress className="text-teal-400" /> Express.js */}
                <span className="text-teal-400">&lt;&gt;</span> Express.js
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiMysql className="text-teal-400" /> MySQL */}
                <span className="text-teal-400">🗄️</span> MySQL
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiPostgresql className="text-teal-400" /> PostgreSQL */}
                <span className="text-teal-400">🗄️</span> PostgreSQL
              </p>
            </div>
          </div>

          {/* --- DevOps & Tools Card --- */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center gap-4 mb-6">
              {/* Icon */}
              <div className="rounded-lg bg-teal-500/10 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">DevOps & Tools</h3>
            </div>
            {/* Skill list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                {/* <FaGitAlt className="text-teal-400" /> Git */}
                <span className="text-teal-400">⑂</span> Git
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiGithub className="text-teal-400" /> GitHub */}
                <span className="text-teal-400">⑂</span> GitHub
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiAzuredevops className="text-teal-400" /> Azure DevOps */}
                <span className="text-teal-400">☁️</span> Azure DevOps
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiVisualstudiocode className="text-teal-400" /> VS Code */}
                <span className="text-teal-400">&gt;_</span> VS Code
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <FaAws className="text-teal-400" /> AWS */}
                <span className="text-teal-400">☁️</span> AWS
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span className="text-teal-400">&gt;_</span> RED (Robot Editor)
              </p>
            </div>
          </div>

          {/* --- Data & Analytics Card --- */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
            <div className="flex items-center gap-4 mb-6">
              {/* Icon */}
              <div className="rounded-lg bg-teal-500/10 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.25A2.25 2.25 0 0018 3H6A2.25 2.25 0 003.75 5.25v12.75A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Data & Analytics</h3>
            </div>
            {/* Skill list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiElasticsearch className="text-teal-400" /> Elasticsearch */}
                <span className="text-teal-400">🔍</span> Elasticsearch
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                {/* <SiKibana className="text-teal-400" /> Kibana */}
                <span className="text-teal-400">📊</span> Kibana
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span className="text-teal-400">&lt;&gt;</span> Kibana Query Language
              </p>
            </div>
          </div>

        </div> {/* End Skills Grid */}
      </div> {/* End Container */}
    </div>
  )
}

export default Skills
