import { 
  Cloud, 
  Code, 
  Settings, 
  MoveRight // Using MoveRight as a fallback for the arrow in the button
} from 'lucide-react';

const HeroIcon = ({ icon: Icon }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700">
    <Icon className="h-6 w-6" />
  </div>
);


const Home = () => {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        
        {/* Floating background clouds */}
        <Cloud className="absolute -top-10 -left-10 z-0 h-48 w-48 text-gray-200/50 opacity-50" />
        <Cloud className="absolute -bottom-20 -right-20 z-0 h-72 w-72 text-gray-200/50 opacity-50" />
        <Cloud className="absolute top-1/3 -right-1/4 z-0 h-40 w-40 text-gray-200/50 opacity-50 md:top-20 md:-right-5" />
        <Cloud className="absolute bottom-1/4 -left-1/4 z-0 hidden h-40 w-40 text-gray-200/50 opacity-50 md:block" />

        {/* Icons */}
        <div className="relative z-10 mb-8 flex justify-center space-x-4">
          <HeroIcon icon={Code} />
          <HeroIcon icon={Settings} />
          <HeroIcon icon={Cloud} />
        </div>

        {/* Main Heading (Name) */}
        <h1 className="relative z-10 text-5xl font-extrabold text-gray-900 md:text-7xl">
          Ayush Kumar Dubey
        </h1>

        {/* Subtitle */}
        <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          A cloud-savvy software developer crafting elegant, high-performance
          digital experiences from the ground up.
        </p>

        {/* Buttons */}
        <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View Projects
            <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-gray-200 px-6 py-3 text-base font-semibold text-gray-800 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home
