import React from "react";

// flowbite.com
const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="orange"
    className="w-10 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const closeIcon = (
  <svg
    className="w-8 h-8 pl-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      stroke="orange"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
);

type MenuButtonType = {
  isOpen: boolean;
};

const MenuButton = ({ isOpen }: MenuButtonType) => {
  return isOpen ? closeIcon : hamburgerIcon;
};

export default MenuButton;
