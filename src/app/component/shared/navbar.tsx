"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const Pagenavbar = () => {
    const pathname = usePathname();

    return (
        <nav role="tablist"
            className="bg-[#0C0D10] text-white border-b border-gray-700/30">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">

                {/* Left: Logo & Brand Name */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FitLog Logo"
                        width={36}
                        height={36}
                    />
                    <h2 className="text-xl font-black tracking-wider">
                        FITLOG
                    </h2>
                </Link>

                {/* Center: Workouts & My Plan */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className={`px-4 py-1.5 text-sm font-bold transition rounded-full ${pathname === "/"
                                ? "bg-[#1a2e05] text-[#CCFF00]"
                                : "text-gray-400 hover:text-[#CCFF00]"
                            }`}
                        role="tab"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/component/myplan"
                        className={`px-4 py-1.5 text-sm font-bold transition rounded-full ${pathname === "/component/myplan"
                                ? "bg-[#1a2e05] text-[#CCFF00]"
                                : "text-gray-400 hover:text-[#CCFF00]"
                            }`}
                        role="tab"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Right: Counters */}
                <div className="flex items-center gap-6">
                    {/* Plan Counter */}
                    <Link
                        href="/component/myplan"
                        className="flex items-center gap-2 text-sm font-bold"
                    >
                        <span className="text-gray-300">Plan</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                            0
                        </span>
                    </Link>

                    {/* Saved Counter */}
                    <Link
                        href="/component/myplan"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-bold"
                    >
                        <span className="text-gray-300">Saved</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                            0
                        </span>
                    </Link>
                </div>

            </div>
            {/* <div className="divider m-0 border-gray-700"></div> */}
        </nav>
    );
};

export default Pagenavbar;