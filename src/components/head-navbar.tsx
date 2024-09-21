import { Button } from "@/components/ui";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const HeadNavbar = () => {
  return (
    <div className='w-full text-base h-16 absolute flex gap-2 items-center justify-end pr-4 bg-transparent z-50'>
      <Button className='text-xl' variant='ghost'>
        <Link href='https://github.com/chi-cong' className='text'>
          <FaGithub />
        </Link>
      </Button>
      <Button variant='ghost'>
        <Link href='#hero'>About me</Link>
      </Button>
    </div>
  );
};
