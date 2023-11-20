"use client";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";
import MenuDisclosure from "./MenuDisclosure";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed w-full from-zinc-200  border-none backdrop-blur-sm rounded-xl py-5 px-2">
      <div>
        <MenuDisclosure />
      </div>
      <div>
        <Image
          className="relative"
          src="/logo.png"
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
