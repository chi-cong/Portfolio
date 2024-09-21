import { TimelineItem } from "@/components/timeline-item";
import { TimelineData } from "@/share/models";
import { FaAnglesDown } from "react-icons/fa6";
import clsx from "clsx";

const mockData: TimelineData[] = [
  {
    start: "07/2022",
    end: "10/2022",
    place: "NCC Soft",
    type: "job",
    position: "Frontend Web Intern",
  },
  {
    start: null,
    end: "09/2024",
    place: "Thuy Loi University",
    type: "education",
    position: "Computer Science Graduate",
  },
  {
    start: "03/2024",
    end: "Now",
    place: "Lac Hong Tech",
    type: "job",
    position: "Web Intern",
  },
];

export const Timeline = () => {
  let side: "left" | "right" = "right";

  return (
    <div className='flex flex-col'>
      <div className='h-0.5 w-full bg-gradient-to-r from-primary-blue to-primary-pink'></div>
      <div className={`text-6xl w-full  justify-center flex items-center p-7 `}>
        <span className='bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent'>
          MY TIMELINE
        </span>
      </div>
      <div className='w-full text-primary flex flex-col items-center justify-start '>
        {mockData.map((timeline, index) => {
          if (side === "left") {
            side = "right";
          } else {
            side = "left";
          }
          return <TimelineItem key={index} side={side} data={timeline} />;
        })}
        <div
          className={clsx(
            "rounded-full w-12 h-12 flex justify-center bg-primary items-center text-3xl text-primary-black "
          )}
        >
          <FaAnglesDown />
        </div>
      </div>
    </div>
  );
};
