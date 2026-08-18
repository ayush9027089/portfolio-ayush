import {
  Cloud,
  Code,
  Settings,
  MoveRight
} from 'lucide-react';

const HeroIcon = ({ Icon }) => {
  if (!Icon) return null;
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700">
      <Icon className="h-6 w-6" />
    </div>
  );
};

const Home = () => {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-24 md:py-32">
      {/* Floating background clouds */}
      <Cloud className="animate-float absolute top-10 left-10 z-0 h-40 w-40 text-gray-300/60" />
      <Cloud className="animate-float-delayed absolute bottom-16 right-12 z-0 h-60 w-60 text-gray-300/50" />
      <Cloud className="animate-float-slow absolute top-1/4 right-8 z-0 h-36 w-36 text-gray-300/50 md:top-24 md:right-20" />
      <Cloud className="animate-float absolute bottom-24 left-8 z-0 hidden h-36 w-36 text-gray-300/50 md:block" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Icons */}
        <div className="mb-8 flex justify-center space-x-4">
          <HeroIcon Icon={Code} />
          <HeroIcon Icon={Settings} />
          <HeroIcon Icon={Cloud} />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 md:text-7xl">
          Ayush Kumar Dubey
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          A cloud-savvy software developer crafting elegant, high-performance
          digital experiences from the ground up.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

export default Home;