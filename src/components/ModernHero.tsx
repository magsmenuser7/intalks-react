import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroVideo from '../assets/intalks-av-final.mp4';

const ModernHero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh_-_4rem_-_325px)] min-h-[calc(100svh_-_4rem_-_325px)] items-end justify-start overflow-hidden bg-black md:min-h-[100svh] md:bg-transparent">
      <video
        className="absolute inset-0 h-full w-full scale-[1.25] object-cover object-center md:scale-[1.05]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-6 pt-20 text-left sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20">
        <h1 className="max-w-3xl text-[clamp(1.125rem,5.5vw,1.5rem)] font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          Where Stories
          <br />
          <span className="bg-gradient-to-r from-[#FFD700] to-[#F7B58D] bg-clip-text text-transparent">
            Shape Industries
          </span>
        </h1>

        <div className="mt-3 flex flex-col items-start gap-2 sm:mt-7 sm:flex-row sm:gap-4">
          <a
            href="https://www.youtube.com/watch?v=p7QP0Xhz4K4&t=1509s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full max-w-[240px] items-center justify-center rounded-xl bg-gradient-to-r from-[#F7B58D] to-[#FFD700] px-3 py-2.5 text-[11px] font-bold text-[#111111] shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:w-auto sm:max-w-none sm:px-6 sm:py-3.5 sm:text-base"
          >
            <Play className="mr-2 h-4 w-4 sm:mr-3 sm:h-5 sm:w-5" />
            Watch Latest Episode
          </a>

          <Link
            to="/become-guest"
            className="inline-flex w-full max-w-[240px] items-center justify-center rounded-xl border-2 border-white/80 bg-black/20 px-3 py-[9px] text-[11px] font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/15 sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-base"
          >
            Share Your Story
            <ArrowRight className="ml-2 h-4 w-4 sm:ml-3 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;