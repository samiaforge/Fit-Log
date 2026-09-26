"use client"
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkouts = pathname === "/" || pathname.startsWith("/workouts");
  const isMyPlan = pathname.startsWith("/my-plan");


  const links = (
    <>
      <li className="px-2">
        <Link
        href="/"
        className={isWorkouts ? "bg-[#2b2d21] rounded-2xl text-[#C2F800]" : ""}
      >
        Workouts
      </Link>
    </li>

    <li>
      <Link
        href="/my-plan"
        className={isMyPlan ? "bg-[#2b2d21] rounded-2xl text-[#C2F800]" : ""}
      >
        My Plan
      </Link>
      </li>
    </>
  );


  return (
    <div className="sticky top-0 z-50 w-full bg-[#0f1012] border-b border-gray-800">
      <div className="navbar py-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo"  width={32}
  height={32}></Image>
            <Link href="/" className="text-xl font-bold">
  FITLOG
</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1">

  <Link
    href="/my-plan"
    className="flex items-center gap-2 rounded-full  px-3 py-1 text-sm font-semibold"
  >
    <span>Plan</span>
    <span className="bg-[#ccff00] rounded-full px-2.5 py-1 text-black">0</span>
  </Link>

  <Link
    href="/MyPlan"
    className="flex items-center gap-2 rounded-full px-3 py-1 text-sm"
  >
    <span>Saved</span>
    <span className="border border-gray-500 rounded-full px-2.5 py-1">0</span>
  </Link>

</div>
      </div>
    </div>
  );
};

export default Navbar;
