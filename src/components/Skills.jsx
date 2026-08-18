import { 
  FaHtml5, 
  FaReact, 
  FaJava, 
  FaGitAlt, 
  FaGithub, 
  FaAws, 
  FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiRender, 
  SiPostman, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiKaggle, 
  SiR 
} from 'react-icons/si';
import { 
  TbApi, 
  TbBrandAzure, 
  TbBinaryTree 
} from 'react-icons/tb';

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-black px-4 py-20 text-gray-200">
      <div className="container mx-auto max-w-6xl">
        
        {/* === SECTION HEADER === */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-teal-400">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">
            A glimpse into my toolbox of technologies and skills.
          </p>
        </div>

        {/* === SKILLS GRID === */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* --- 1. Frontend Development --- */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-teal-500/10 p-3 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.25L12 9.75l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21m-7.5-6L12 17.25l1.5-1.5m-5.25 6.75L12 17.25l1.5-1.5m-3.75-9l3.75-3.75V21" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Frontend Development</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaReact className="h-5 w-5 text-teal-400" /> React.js
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiNextdotjs className="h-5 w-5 text-teal-400" /> Next.js
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiTailwindcss className="h-5 w-5 text-teal-400" /> Tailwind CSS
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaHtml5 className="h-5 w-5 text-teal-400" /> HTML5 & CSS3
              </p>
            </div>
          </div>

          {/* --- 2. Backend Development --- */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-teal-500/10 p-3 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Backend Development</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaJava className="h-5 w-5 text-teal-400" /> Java
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiSpringboot className="h-5 w-5 text-teal-400" /> Spring Boot
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <TbBinaryTree className="h-5 w-5 text-teal-400" /> Microservices
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <TbApi className="h-5 w-5 text-teal-400" /> REST APIs
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiMysql className="h-5 w-5 text-teal-400" /> MySQL
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiMongodb className="h-5 w-5 text-teal-400" /> MongoDB
              </p>
            </div>
          </div>

          {/* --- 3. Cloud, DevOps & Tools --- */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-teal-500/10 p-3 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">DevOps &amp; Cloud</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaGitAlt className="h-5 w-5 text-teal-400" /> Git
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaGithub className="h-5 w-5 text-teal-400" /> GitHub
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaAws className="h-5 w-5 text-teal-400" /> AWS
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiRender className="h-5 w-5 text-teal-400" /> Render
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <TbBrandAzure className="h-5 w-5 text-teal-400" /> Azure DevOps
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiPostman className="h-5 w-5 text-teal-400" /> Postman
              </p>
            </div>
          </div>

          {/* --- 4. Data & Machine Learning --- */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-teal-500/10 p-3 text-teal-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.25A2.25 2.25 0 0018 3H6A2.25 2.25 0 003.75 5.25v12.75A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Data &amp; AI</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <p className="flex items-center gap-2.5 text-gray-300">
                <FaPython className="h-5 w-5 text-teal-400" /> Python
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiScikitlearn className="h-5 w-5 text-teal-400" /> Scikit-Learn
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiPandas className="h-5 w-5 text-teal-400" /> Pandas
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiNumpy className="h-5 w-5 text-teal-400" /> NumPy
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiKaggle className="h-5 w-5 text-teal-400" /> Kaggle
              </p>
              <p className="flex items-center gap-2.5 text-gray-300">
                <SiR className="h-5 w-5 text-teal-400" /> R Language
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;