"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links =[
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-yellow-600"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-48 text-center text-2xl">
          <Link href="/">
            <h1 className="font-4xl font-semibold">
              Heru<span className="text-yellow-600">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link 
                href={link.path} 
                key={index} 
                className={`${
                  link.path === pathname && "text-yellow-600 border-b-2 border-yellow-600"
                  }text-xl capitalize hover:text-yellow-600 transition-all`} 
              >{link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav