import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Pagenavbar = () => {
    return (
        <nav className="bg-[#0C0D10] text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-5">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FitLog Logo"
                        width={40}
                        height={40}
                    />

                    <h2 className="text-xl font-black tracking-wide">
                        FITLOG
                    </h2>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="rounded-full bg-[#CCFF00] px-5 py-2 font-bold text-black transition hover:opacity-80"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="font-semibold transition hover:text-[#CCFF00] "
                    >
                        My Plan
                    </Link>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-3">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 font-bold text-black"
                    >
                        <span>Plan</span>
                        <span>0</span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 font-bold"
                    >
                        <span>Saved</span>
                        <span>0</span>
                    </Link>

                </div>
            </div>

            <div className="divider m-0 opacity-20" />
        </nav>
    );
};

export default Pagenavbar;