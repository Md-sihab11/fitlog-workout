
import React from "react";
import Image from "next/image";
import img from "@/assets/logo.png";

const Pagefooter = () => {
    return (
        <footer className="border-t border-gray-700/30 bg-[#0C0D10] text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">

                {/* Logo & Brand */}
                <div className="flex items-center gap-3">
                    <Image
                        src={img}
                        alt="FitLog Logo"
                        width={36}
                        height={36}
                    />

                    <h2 className="text-xl font-black tracking-wider">
                        FITLOG
                    </h2>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm text-gray-400 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Pagefooter;

