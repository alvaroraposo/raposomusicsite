"use client";
import Image from "next/image";
import SearchButton from "./SearchButton";
import MenuDisclosure from "./MenuDisclosure";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed w-full  border-none bg-zinc-800 py-5  z-10 ">
      <div>
        <MenuDisclosure />
      </div>
      <div>
        <Image
          className="relative"
          src="/logo2.png"
          alt="Next.js Logo"
          width={300}
          height={37}
          priority
        />
      </div>
      <div className="pt-1">
        <SearchButton isOpen={false} />
      </div>
    </div>
  );
};

export default Navbar;
