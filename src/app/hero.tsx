import { HeroFrameworkName, HeroFrameworks } from "@/components";
import { Button } from "@/components/ui";
import Link from "next/link";

export const Hero = () => {
  return (
    <div
      className="w-full flex justify-center items-start h-dvh bg-fixed bg-[url('../assets/img/hero-bg.jpg')] padding"
      id='hero'
    >
      <div className='w-full max-w-screen-2xl h-full  flex flex-col justify-center pl-8 gap-8'>
        <div className='flex'>
          <h2
            className='xl:text-7xl lg:text-5xl text-transparent whitespace-pre font-semibold'
            style={{ WebkitTextStroke: "1px white", paintOrder: "stroke fill" }}
          >
            {"HI, I'M "}
          </h2>
          <h2
            className='xl:text-7xl lg:text-5xl text-primary font-semibold'
            style={{ WebkitTextStroke: "1px white" }}
          >
            {" CHI CONG"}
          </h2>
        </div>
        <div className='flex max-w-7xl'>
          <h2 className='xl:text-8xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-blue to-primary-pink bg-transparent bg-clip-text whitespace-pre font-semibold'>
            {"FULLSTACK "}
          </h2>
          <h2
            className='xl:text-8xl lg:text-6xl text-transparent font-semibold'
            style={{ WebkitTextStroke: "1px white", paintOrder: "stroke fill" }}
          >
            {"DEVELOPER"}
          </h2>
        </div>
        <div className='lg:text-3xl xl:text-4xl max-w-7xl'>
          <p className='text-description w-full break-normal '>
            A young, enthusiastic and skilled developer. I have worked in many
            technologies include <HeroFrameworkName />
          </p>
        </div>
        <div className='flex gap-10 font-black text-2xl'>
          <Button className='pt-6 pb-6 w-48 font-semibold text-lg'>
            Contact Me
          </Button>
          <Button
            variant={"outline"}
            className='pt-6 pb-6 w-48 ont-semibold text-lg'
          >
            <Link href='#projects'>See My Works</Link>
          </Button>
        </div>
        <HeroFrameworks />
      </div>
    </div>
  );
};
