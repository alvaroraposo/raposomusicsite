import React from "react";

const MenuItem = ({ itemName = "" }) => {
  return (
    <div className="border-t-0 border ">
      <div className="px-6 py-3">
        <span className="w-fit border-2 border-b-orange-300 border-t-0 border-x-0">
          {itemName}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
