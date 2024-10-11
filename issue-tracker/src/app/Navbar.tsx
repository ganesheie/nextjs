"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const navLinks = [
    {
      link: "/",
      label: "DashBoard",
    },
    {
      link: "/issues",
      label: "Issues",
    },
    {
      link: "/issues/new",
      label: "Create Issue",
    },
  ];
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug data-testid="bug-icon" />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((links, index) => (
          <Link
            key={index}
            href={links.link}
            className={classNames({
              "text-zinc-900": links.link === currentPath,
              "text-zinc-500": links.link !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
