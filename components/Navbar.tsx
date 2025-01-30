"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logos/IRU.png";
import { IconChevronRight } from "@tabler/icons-react";
import { IconMenu } from "@tabler/icons-react";
import { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div
        className={`navbar ${
          menuActive ? "hide-nav" : ""
        } top-0 w-screen gap-4 left-0 flex justify-between max-sm:justify-normal items-center px-12 max-sm:px-4 pt-4 pb-2`}
      >
        <Link href="/" className="flex gap-2 logo items-center mr-auto">
          <Image src={logo} alt="Immediate Response Unit Logo" />
          IRU
        </Link>

        <div className="links flex gap-8 max-sm:hidden">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href="#">About</Link> */}
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/3r51je"
          className="cta max-sm:hidden"
        >
          Get Started <IconChevronRight />
        </Link>

        <span
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className="menu-btn hidden cursor-pointer max-sm:flex"
        >
          <IconMenu />
        </span>
      </div>

      <div
        className={`menu-list ${
          menuActive ? "menu-list-active" : ""
        } flex-col fixed gap-4 flex right-0 h-screen`}
      >
        <Link href="/">Home</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        {/* <Link href="#">About</Link> */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/3r51je"
          className="cta"
        >
          Get Started <IconChevronRight />
        </Link>
      </div>

      <div
        onClick={() => {
          setMenuActive(!menuActive);
        }}
        className={`menu-overlay fixed ${
          menuActive ? "flex" : "hidden"
        } w-screen h-screen`}
      ></div>
    </>
  );
}

export default Navbar;
