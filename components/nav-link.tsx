"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segment = useSelectedLayoutSegment();
  const isActive = href === `/${segment}`;
  return (
    <Link
      href={href}
      className={`relative max-sm:text-2xl py-1.5 px-3 ${
        isActive ? "text-white" : "text-white/70"
      } transition`}
    >
      {isActive && (
        <div className="absolute top-0 bottom-0 max-sm:right-full sm:left-0 flex items-center justify-center">
          <span className="inline-block w-2 h-2 sm:w-1.5 sm:h-1.5 will-change-transform origin-center animate-spin bg-white"></span>
        </div>
      )}
      {children}
    </Link>
  );
};
