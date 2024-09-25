import { ProjectCard } from "@/components";
import Link from "next/link";
import { GradientTiTle } from "@/components";

const mockData = [
  {
    name: "Porfolio",
    description: `Introducing myself and why I'm the one you need`,
    mainTechs: ["Nextjs", "Supabase", "Tailwind"],
    link: "https://github.com/chi-cong/Portfolio",
  },
  {
    name: "Project Management",
    description: `Managing company's departments, projects and tasks`,
    mainTechs: ["React", "Expressjs", "Redux"],
    link: "https://github.com/chi-cong/project-management-fe",
  },
  {
    name: "Health Tracker",
    description: `Tracking BMI, scheduling activities, building diet and AI chatbot`,
    mainTechs: ["Flutter", "Firebase"],
    link: "https://github.com/chi-cong/health-tracker",
  },
  {
    name: "Timesheet",
    description: `Managing projects, tasks and employee schedules`,
    mainTechs: ["Angular"],
    link: "https://github.com/chi-cong/timesheet-clone",
  },
];

export const Projects = () => {
  return (
    <div className='flex flex-col gap-8 min-h-dvh' id='projects'>
      {/* gradient color boder */}
      <GradientTiTle title='MY WORKS' />
      <div className='flex justify-center w-full'>
        <div className='grid grid-flow-row grid-cols-2 gap-10 max-w-screen-2xl'>
          {mockData.map((project, index) => {
            return <ProjectCard key={index} data={project} />;
          })}
        </div>
      </div>
      <div className='text-xl text-primary ml-auto mr-auto'>
        ... and many more pet{" "}
        <Link
          className='underline underline-offset-1'
          target='_blank'
          href={"https://github.com/chi-cong?tab=repositories"}
        >
          projects
        </Link>
      </div>
    </div>
  );
};
