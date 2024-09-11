import Image from "next/image";
import { Hero } from "./hero";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      {/* nav bar */}
      <div className='w-screen flex justify-end pr-4 bg-transparent fixed '>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='#' legacyBehavior passHref className='color'>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Hero />
    </main>
  );
}
