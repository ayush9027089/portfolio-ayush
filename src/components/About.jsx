import React from "react";

const About = () => {
  return (
   // This component assumes you have Tailwind CSS configured in your project.

<div className="min-h-screen w-full bg-black text-gray-200 py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    
    {/* === HEADING SECTION === */}
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-teal-400 mb-4">
        About Me
      </h1>
      <p className="text-xl text-gray-400">
        Machine Learning Specialist , Data Analyst, and code explorer.
      </p>
    </div>

    {/* === CONTENT SECTION (GRID) === */}
    {/* This grid stacks on mobile (1 column) and splits into 
      1/3 (image) and 2/3 (text) on large screens (lg).
    */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      
      {/* --- Column 1: Image & Tags --- */}
      <div className="lg:col-span-1 flex flex-col items-center">
        
        {/* Profile Image with Glow Effect */}
        <div className="mb-6">
          <img 
            src="public/profilepic.jpg" 
            alt="Aditya" 
            // Applied a teal shadow to mimic the glow from the screenshot
            className="w-56 h-56 rounded-full object-cover shadow-2xl shadow-teal-500/40" 
          />
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {/* You can replace these with <span> or <a> tags.
            In a real app, you might use an array.map() to generate them.
          */}
          <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">
            Machine Learning
          </span>
          <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">
            Web Development
          </span>
          <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">
            Backend Developer
          </span>
        </div>
      </div>

      {/* --- Column 2: Text Bio --- */}
      {/* This is your text block, but I've removed the amber background 
        and styled the text to be light.
      */}
      <div className="lg:col-span-2 text-lg text-gray-300">
        <p className="mb-6">
          Hey! I'm Ayush, a Computer Science student who's passionate about
          solving real-world problems through efficient and thoughtful code.
          I love working on clean UIs, scalable systems, and exploring how
          tech can make life easier.
        </p>
        <p>
          I'm constantly sharpening my skills across full-stack development,
          cloud infrastructure, and automation. I believe learning never
          stops, and I'm always up for a good challenge, a new stack, or an
          interesting bug to squash.
        </p>
      </div>

    </div> {/* End Grid */}
    <hr className="my-20 border-gray-800" />

    {/* === EDUCATION SECTION (NEW) === */}
    {/* This grid stacks on mobile and goes to 2 columns on medium screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* --- Card 1: University --- */}
      <div className="flex items-start gap-5 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        {/* Icon */}
        <div className="shrink-0 rounded-lg bg-teal-500/10 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.697 50.697 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Ajay Kumar Garg Engineering College
          </h3>
          <p className="text-gray-400">
            B.Tech in Computer Science
          </p>
          <p className="mt-1 text-gray-500">
            2023 - 2027 (Expected)
          </p>
        </div>
      </div>

      {/* --- Card 2: School --- */}
      <div className="flex items-start gap-5 rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
        {/* Icon */}
        <div className="shrink-0 rounded-lg bg-teal-500/10 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.026.198-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
          </svg>
        </div>
        {/* Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Nehru International Public School 
          </h3>
          <p className="text-gray-400">
            10th & 12th (PCM Stream)
          </p>
          <p className="mt-1 text-gray-500">
            2020 - 2023
          </p>
        </div>
      </div>

    </div> {/* End Education Grid */}
  </div> {/* End Container */}
</div>
  );
};

export default About;
