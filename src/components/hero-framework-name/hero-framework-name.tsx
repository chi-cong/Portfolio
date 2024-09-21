"use client";

import styles from "./hero-framework-name.module.css";
import { useHeroFrameworks } from "@/share/store";
import clsx from "clsx";
import { CSSProperties, useEffect, useState } from "react";

export const HeroFrameworkName = () => {
  const name = useHeroFrameworks((state) => state.selectedFramework);
  const previousName = useHeroFrameworks((state) => state.previousFramework);
  const [frameworkChanged, setFrameworkChanged] = useState<boolean>(false);

  useEffect(() => {
    if (name !== previousName) {
      setFrameworkChanged(true);
      setTimeout(() => setFrameworkChanged(false), 130);
    }
  }, [name, previousName]);

  return (
    <span className='relative inline-block align-top'>
      {frameworkChanged ? (
        <>
          <span
            className={clsx(
              `w-full break-normal absolute inline-block top-0 ${styles["hero-selected-framework"]}`,
              {
                "text-cyan-500": name === "React",
                "text-white": name === "Nextjs",
                "text-red-500": name === "Angular",
                "text-cyan-600": name === "Flutter",
                "text-green-600": name === "Nodejs",
                "text-purple-500": name === "Dotnet",
              }
            )}
          >
            {name}
          </span>
          <span
            className={clsx(
              `w-full break-normal absolute inline-block top-0 ${styles["hero-old-selected-framework"]}`,
              {
                "text-cyan-500": previousName === "React",
                "text-red-500": previousName === "Angular",
                "text-white": name === "Nextjs",
                "text-cyan-600": previousName === "Flutter",
                "text-green-600": previousName === "Nodejs",
                "text-purple-500": previousName === "Dotnet",
              }
            )}
          >
            {previousName}
          </span>
        </>
      ) : (
        <span
          className={clsx(
            "w-full break-normal duration-300 relative inline-block",
            {
              "text-cyan-500": name === "React",
              "text-red-500": name === "Angular",
              "text-cyan-600": name === "Flutter",
              "text-white": name === "Nextjs",
              "text-green-600": name === "Nodejs",
              "text-purple-500": name === "Dotnet",
            }
          )}
        >
          {name}
        </span>
      )}
    </span>
  );
};
