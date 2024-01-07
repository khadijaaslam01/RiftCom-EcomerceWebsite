import React from "react";

const Button = ({
  className = "h-[50px] w-[20%] mt-[40px]",
  tilte = "Shop Now",
  ...resProps
}) => {
  return (
    <button
      {...resProps}
      className={` text-white bg-black text-[20px] font-medium ${className}`}
    >
      {tilte}
    </button>
  );
};

export default Button;
