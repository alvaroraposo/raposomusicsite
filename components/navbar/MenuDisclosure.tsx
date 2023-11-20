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
              enter="transition-opacity ease-linear duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="pl-3">
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
