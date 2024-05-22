"use client";

import { links } from "@/lib/linksLib";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-4">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.path}
                className="font-bold text-[13px] uppercase font-primary tracking-[3px] hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
