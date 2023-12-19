import Navbar from "@/components/navbar/";
import Article from "@/components/article/";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex w-full mt-[77px] bg-white text-orange-300 justify-center py-4">
        <Article />
      </div>
    </main>
  );
}
