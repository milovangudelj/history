import Link from "next/link";

import { NavLink } from "./nav-link";
import { GithubLogo } from "./icons";

export const Navbar = () => {
  return (
    <nav className="flex-none flex items-center justify-between p-3 backdrop-blur border-b border-white/[0.06] sticky top-0">
      <div className="flex items-baseline gap-3">
        <Link href="/" className="inline-block">
          History
        </Link>
        <Link
          href={"https://github.com/milovangudelj"}
          target="_blank"
          className="text-xs inline-flex items-center gap-2 font-medium opacity-60 hover:opacity-100 transition"
        >
          by @milovangudelj{" "}
          <span>
            <GithubLogo aria-hidden={true} className="w-4 h-4" weight="bold" />
          </span>
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/contacts"}>Contacts</NavLink>
          </li>
          <li>
            <NavLink href={"/products"}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};
