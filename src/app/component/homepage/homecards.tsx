import { Workout } from "@/type/type";
import { IoIosTimer } from "react-icons/io";
import { LiaBurnSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

const getCards = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const Homecards = async () => {
    const libraryCards: Workout[] = await getCards();

    return (
        <section
            id="library"
            className="container mx-auto mt-10 mb-12 px-4"
        >
            {/* Section Heading */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-wide text-white md:text-4xl">
                    THE LIBRARY
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {libraryCards.map((card: Workout) => (
                    <div
                        key={card.id}
                        className="overflow-hidden rounded-2xl bg-[#17191F] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <figure>
                            <img
                                src={card.image}
                                alt={card.name}
                                className="h-52 w-full object-cover"
                            />
                        </figure>

                        {/* Card Content */}
                        <div className="p-5">
                            {/* Category Pills */}
                            <div className="mb-3 flex flex-wrap gap-2">
                                {card.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Workout Name */}
                            <h3 className="text-xl font-bold uppercase text-white">
                                {card.name}
                            </h3>

                            {/* Equipment */}
                            <p className="mt-2 text-sm text-gray-400">
                                {card.equipment}
                            </p>

                            {/* Divider */}
                            <div className="my-4 h-px bg-gray-700/50"></div>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <div className="flex items-center gap-1">
                                    <IoIosTimer className="text-lg text-[#ccff00]" />
                                    <span>{card.duration} min</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <LiaBurnSolid className="text-xl text-[#ccff00]" />
                                    <span>{card.caloriesBurned} kcal</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaStar className="text-sm text-[#ccff00]" />
                                    <span>{card.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Homecards;