import React from "react";

const MenuItem = ({ itemName = "HOME" }) => {
  return (
    <div className="border-t-0 border ">
      <div className="p-2 mb-3 ">
        <span className="w-fit border-4 border-b-orange-300 border-t-0 border-x-0">
          {itemName}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
