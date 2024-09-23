import { ProjectCard } from "@/components";
const mockData = [
  {
    name: "Porfolio",
    description: `Introducing myself and why I'm the one you need`,
    mainTechs: ["Nextjs", "Supabase", "Tailwind"],
  },
  {
    name: "Project Management",
    description: `Managing company's departments, projects and tasks`,
    mainTechs: ["React", "Expressjs", "Redux"],
  },
  {
    name: "Health Tracker",
    description: `Tracking BMI, scheduling activities, building diet and AI chatbot`,
    mainTechs: ["Flutter", "Firebase"],
  },
  {
    name: "Timesheet",
    description: `Managing projects, tasks and employee schedules`,
    mainTechs: ["Angular"],
  },
];

export const Projects = () => {
  return (
    <div className='flex flex-col gap-8 min-h-dvh' id='projects'>
      {/* gradient color boder */}
      <div className='h-0.5 w-full bg-gradient-to-r from-primary-blue to-primary-pink' />
      <div className={`text-6xl w-full  justify-center flex items-center p-7`}>
        <span className='bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent'>
          MY WORKS
        </span>
      </div>

      <div className='flex justify-center w-full'>
        <div className='grid grid-flow-row grid-cols-2 gap-10 max-w-screen-2xl'>
          {mockData.map((project, index) => {
            return <ProjectCard key={index} data={project} />;
          })}
        </div>
      </div>
      <div className='text-xl text-primary ml-auto mr-auto'>
        ... and many more pet projects
      </div>
    </div>
  );
};
