import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui";
import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiRedux,
  SiFlutter,
  SiFirebase,
  SiAngular,
} from "react-icons/si";

import { FaArrowRightLong } from "react-icons/fa6";

interface ProjectCardProps {
  data: {
    name: string;
    description: string;
    mainTechs: string[];
  };
}

const techIconMap = (tech: string) => {
  switch (tech) {
    case "Next":
      return <SiNextdotjs />;
    case "Supabase":
      return <SiSupabase />;
    case "Tailwind":
      return <SiTailwindcss />;
    case "Expressjs":
      return <SiExpress />;
    case "Redux":
      return <SiRedux />;
    case "Flutter":
      return <SiFlutter />;
    case "Firebase":
      return <SiFirebase />;
    case "Angular":
      return <SiAngular />;
    default:
      return <SiReact />;
  }
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
        <CardContent>
          <div className='w-full flex gap-2 text-primary text-3xl mt-2'>
            {data.mainTechs.map((tech, index) => {
              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>{techIconMap(tech)}</TooltipTrigger>
                    <TooltipContent>
                      <p>{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant='outline' className='flex items-center gap-2'>
            <span>Checkout</span>
            <FaArrowRightLong />
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};
