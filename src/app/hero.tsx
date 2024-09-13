import { Button } from "@/components/ui/button";
import { HeroFrameworks, HeroFrameworkName } from "@/components";

export const Hero = () => {
  return (
    <div
      className="w-screen h-dvh bg-fixed bg-[url('../assets/img/hero-bg.jpg')] padding"
      id='hero'
    >
      <div className='w-full h-full bg-hero-transparent flex flex-col justify-center pl-8 gap-8'>
        <div className='flex'>
          <h2
            className='text-7xl text-transparent whitespace-pre font-semibold'
            style={{ WebkitTextStroke: "1px white", paintOrder: "stroke fill" }}
          >
            {"HI, I'M "}
          </h2>
          <h2
            className='text-7xl text-primary font-semibold'
            style={{ WebkitTextStroke: "1px white" }}
          >
            {" CHI CONG"}
          </h2>
        </div>
        <div className='flex max-w-7xl'>
          <h2
            className='text-8xl text-primary whitespace-pre font-semibold'
            style={{ WebkitTextStroke: "1px white" }}
          >
            {"FULLSTACK "}
          </h2>
          <h2
            className='text-8xl text-transparent font-semibold'
            style={{ WebkitTextStroke: "1px white", paintOrder: "stroke fill" }}
          >
            {"DEVELOPER"}
          </h2>
        </div>
        <div className='text-5xl max-w-7xl'>
          <p className='text-description w-full break-normal text-5xl'>
            A young, enthusiastic and skilled developer. I have worked in many
            technologies include <HeroFrameworkName />
          </p>
        </div>
        <HeroFrameworks />
      </div>
    </div>
  );
};
