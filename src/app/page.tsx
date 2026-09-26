// import Image from "next/image";
import HeroSection from "./component/shared/hero";

export default function Home() {
  return (
    <div className="">
      < HeroSection />
      <div className="container mx-auto space-x-3 mt-4 mb-8">
        <h2 className="font-bold text-4xl">THE LIBRARY</h2>
        <p className="text-gray-500">Twelve lifts covering every major muscle group</p>
      </div>
    </div >
  );
}
