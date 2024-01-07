import React from "react";
import Row from "../common/row";

const menus = [
  "Jewelry & Acceseries",
  "Clothing & Shoes",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainement",
  "Art & Collectibles",
  "Craft supplies & Tools",
];

const BottomHeader = () => {
  return (
    <div className="h-[60px] px-[10%] w-full bg-[#888f950d] ">
      <Row className="flex items-center h-full justify-between">
        {menus.map((items) => (
          <p className="text-slate-800 text-[16px]" key={items}>
            {items}
          </p>
        ))}
      </Row>
    </div>
  );
};

export default BottomHeader;
