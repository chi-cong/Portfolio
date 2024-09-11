import Image from "next/image";
import reactLogo from "@/assets/img/frameworks/react.png";
import angularLogo from "@/assets/img/frameworks/angular.png";
import dotnetLogo from "@/assets/img/frameworks/dotnet.png";
import flutterLogo from "@/assets/img/frameworks/flutter.png";
import nodejsLogo from "@/assets/img/frameworks/nodejs.png";

export const HeroFrameworks = () => {
  return (
    <div className='flex items-center justify-start gap-6 '>
      <Image src={reactLogo} alt='React' width={80} height={80} />
      <Image src={angularLogo} alt='React' width={80} height={80} />
      <Image src={flutterLogo} alt='React' height={80} />
      <Image src={nodejsLogo} alt='React' width={80} height={80} />
      <Image src={dotnetLogo} alt='React' width={80} height={80} />
    </div>
  );
};
