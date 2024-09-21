import { Hero } from "./hero";
import { Timeline } from "@/components/timeline/timeline";
import { HeadNavbar } from "@/components";

export default function Home() {
  return (
    <main className='w-full'>
      <HeadNavbar />
      <Hero />
      <div className='bg-primary-black w-full min-h-dvh shadow-2xl '>
        <Timeline />
      </div>
    </main>
  );
}
