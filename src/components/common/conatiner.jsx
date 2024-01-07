import React from "react";

const Conatiner = ({ children, className }) => {
  return <div className={`w-full px-[10%] ${className}`}>{children}</div>;
};

export default Conatiner;
