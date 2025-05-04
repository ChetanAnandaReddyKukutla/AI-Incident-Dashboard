import { BackgroundBeams } from "./Animations/BackgroundBeams";
// import { Input } from "@/components/ui/input";
import { TextGenerateEffect } from "./Animations/TextGenerateEffect";

const words = `Stay ahead of the curve with the AI Safety Incident Dashboard, your go-to hub for tracking, reporting AI incidents.Our dashboard brings clarity to the complex world of AI safety.
`;

function BackgroundBeamsDemo() {
  return (
    <div className="h-[35rem] w-full bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative sm:text-6xl z-10 text-5xl md:text-7xl text-transparent bg-clip-text bg-[#DDDDE0] bg-[linear-gradient(180deg,_rgba(221,_221,_224,_1)_0%,_rgba(159,_159,_164,_1)_61%,_rgba(96,_96,_102,_1)_100%)]
 text-center font-sans font-bold">
          AI Sentinel
        </h1>
        <p></p>
        <p className="max-w-2xl mx-auto my-5 text-2xl text-center z-10 sm:text-xl">
          <TextGenerateEffect duration={2} filter={true} words={words} />
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { BackgroundBeamsDemo };