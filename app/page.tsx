import Navbar from "@/components/navbar/";
import Article from "@/components/article/";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex w-full mt-[78px] bg-white text-orange-300 justify-center uppercase py-4">
        <Article />
      </div>
    </main>
  );
}
