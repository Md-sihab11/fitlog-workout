import React from 'react';
import img from '@/assets/banner.png'
import Image from 'next/image'
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="container mx-auto px-4 py-6">
            <div className="bg-[#222630] flex flex-col md:flex-row justify-between items-center p-8 rounded-2xl mt-5">

                {/* Left Content */}
                <div className="flex flex-col gap-5 max-w-xl">
                    <span className="text-[#C2F800] text-sm font-bold tracking-wider">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="font-extrabold text-3xl md:text-4xl leading-tight text-white">
                        TRAIN WITH INTENT. LOG <br /> EVERY SET.
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA */}
                    <div>
                        <Link
                            href="#library"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#b0df00]"
                        >
                            BROWSE WORKOUTS
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div>
                    <Image
                        src={img}
                        alt="Banner logo"
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;