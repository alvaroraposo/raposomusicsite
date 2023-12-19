import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import MenuItem from "./MenuItem";
import MenuButton from "./MenuButton";

const MenuDisclosure = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="fixed">
            <Disclosure.Button className="w-full rounded-lg">
              <MenuButton isOpen={open} />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-all duration-100"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition-all duration-100"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Disclosure.Panel className="pt-3">
                <div className="flex flex-col rounded-sm bg-white italic text-lg uppercase font-sans['Arial'] text-gray-950 ">
                  <MenuItem itemName="HOME" />
                  <MenuItem itemName="Rock Clássico" />
                  <MenuItem itemName="MPB" />
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default MenuDisclosure;
