import Navbar from "@/components/navbar/";
import Article from "@/components/article/";
import Editor from "@/components/editor/";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex w-full mt-[77px] bg-white text-orange-300 justify-center">
        <Editor />
      </div>
    </main>
  );
}
