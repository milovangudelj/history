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
    <Link href={href} className="relative">
      {isActive && (
        <span className="inline-block transform-gpu will-change-transform animate-spin bg-white absolute top-1/2 -translate-y-1/2 -left-full mr-2"></span>
      )}
      <span
        className={`${isActive ? "text-white" : "text-white/70"} transition`}
      >
        {children}
      </span>
    </Link>
  );
};
