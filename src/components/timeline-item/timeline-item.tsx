import clsx from "clsx";
import { BsTriangleFill } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";

import type { TimelineData } from "@/share/models";

const iconMap = (type: "job" | "education") => {
  switch (type) {
    case "education":
      return <SlGraduation />;
    default:
      return <MdOutlineWorkOutline />;
  }
};

interface TimelineItemProp {
  side: "left" | "right";
  data: TimelineData;
}
interface TimelineBlockProp {
  side: "left" | "right";
  data: TimelineData;
}

const TimelineBlock = ({ side, data }: TimelineBlockProp) => {
  return (
    <div className={clsx("flex justify-start relative text-primary")}>
      {side === "right" && (
        <BsTriangleFill className='text-slate-700 text-4xl -rotate-90 relative -right-2 top-[5px] ' />
      )}
      <div
        className={clsx(
          "flex flex-col gap-2 justify-start w-72 h-40 bg-slate-700 rounded-md p-3 shadow-lg",
          {
            "items-end shadow-primary-blue": side === "left",
            "items-start shadow-primary-pink": side === "right",
          }
        )}
      >
        <span
          className={clsx("w-fit p-1 text-2xl rounded-md", {
            "bg-primary-blue": side === "left",
            "bg-primary-pink": side === "right",
          })}
        >{`${data.start !== null ? `${data.start} - ` : ""}${data.end}`}</span>
        <div>
          <span>{data.position}</span> at{" "}
          <span
            className={clsx({
              "text-primary-blue": side === "left",
              "text-primary-pink": side === "right",
            })}
          >
            {data.place}
          </span>
        </div>
      </div>
      {side === "left" && (
        <BsTriangleFill className='text-slate-700 text-4xl rotate-90 relative -left-2 top-[5px] ' />
      )}
    </div>
  );
};

export const TimelineItem = ({ side, data }: TimelineItemProp) => {
  return (
    <div className='w-full h-44 flex justify-center gap-9'>
      <div className={clsx({ "opacity-0": side === "right" })}>
        <TimelineBlock side='left' data={data} />
      </div>

      <div className='h-full relative'>
        <div
          className={clsx(
            "relative z-20 rounded-full w-12 h-12 flex justify-center items-center text-3xl ",
            {
              "bg-primary-blue": side === "left",
              "bg-primary-pink": side === "right",
            }
          )}
        >
          {iconMap(data.type)}
        </div>
        <div className='w-0.5 h-full bg-primary absolute z-10 top-0 left-0 right-0 m-auto'></div>
      </div>
      <div className={clsx({ "opacity-0": side === "left" })}>
        <TimelineBlock side='right' data={data} />
      </div>
    </div>
  );
};
