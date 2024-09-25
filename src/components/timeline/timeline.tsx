import { TimelineItem } from "@/components/timeline-item";
import { TimelineData } from "@/share/models";
import { FaAnglesDown } from "react-icons/fa6";
import clsx from "clsx";
import { GradientTiTle } from "../gradient-title";

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
    <div className='flex flex-col pb-6 min-h-dvh gap-8'>
      <GradientTiTle title='MY TIMELINE' />
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
