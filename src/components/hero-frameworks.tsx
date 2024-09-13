"use client";

import Image from "next/image";
import reactLogo from "@/assets/img/frameworks/react.png";
import angularLogo from "@/assets/img/frameworks/angular.png";
import dotnetLogo from "@/assets/img/frameworks/dotnet.png";
import flutterLogo from "@/assets/img/frameworks/flutter.png";
import nodejsLogo from "@/assets/img/frameworks/nodejs.png";
import nextjsLogo from "@/assets/img/frameworks/nextjs.png";
import { useHeroFrameworks } from "@/share/store";
import { useEffect, useState } from "react";
import clsx from "clsx";

export const HeroFrameworks = () => {
  const selectFramework = useHeroFrameworks((state) => state.selectFramework);
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {
    if (!isShowed) setIsShowed(true);
  }, [isShowed]);

  return (
    <div
      className={clsx(
        "h-28 flex items-center justify-start gap-6 duration-500 relative",
        {
          "-left-5 opacity-0": !isShowed,
          "left-0 opacity-100": isShowed,
        }
      )}
    >
      <Image
        onMouseEnter={() => selectFramework("React")}
        src={reactLogo}
        className='duration-150 w-20 h-20 hover:w-24 hover:h-24 '
        alt='React'
      />
      <Image
        onMouseEnter={() => selectFramework("Angular")}
        src={angularLogo}
        alt='Angular'
        className={clsx("duration-150 w-20 h-20 hover:w-24 hover:h-24")}
      />
      <Image
        onMouseEnter={() => selectFramework("Nextjs")}
        src={nextjsLogo}
        alt='Angular'
        className={clsx("duration-150 w-20 h-20 hover:w-24 hover:h-24")}
      />
      <Image
        onMouseEnter={() => selectFramework("Flutter")}
        src={flutterLogo}
        alt='Flutter'
        className='duration-150 w-16 h-20 hover:w-20 hover:h-24 '
      />
      <Image
        onMouseEnter={() => selectFramework("Nodejs")}
        src={nodejsLogo}
        alt='Nodejs'
        className='duration-150 w-20 h-20 hover:w-24 hover:h-24 '
      />
      <Image
        onMouseEnter={() => selectFramework("Dotnet")}
        src={dotnetLogo}
        alt='Dotnet'
        className='duration-150 w-20 h-20 hover:w-24 hover:h-24 '
      />
    </div>
  );
};
