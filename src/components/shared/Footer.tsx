import Image from "next/image";
import fitlogo from "@/assets/logo.png"
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t border-gray-800 sm:footer-horizontal bg-neutral text-neutral-content items-center p-2">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <aside className="flex gap-2 items-center">
        <Image src={fitlogo} alt="footer-logo" width={22}
  height={22} className="rotate-[-44deg]"/>
        <Link href="/" className="text-sm font-bold">
  FITLOG
</Link>
        
      </aside>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
       <p className="text-gray-500">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
        </div>
      
    </footer>
  );
};

export default Footer;
