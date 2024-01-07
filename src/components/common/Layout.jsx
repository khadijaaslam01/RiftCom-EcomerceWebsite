import React, { useState } from "react";
import TopHeader from "../header/TopHeader";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const [cartItem, setCartItem] = useState();

  const handleAdd = () => {};
  return (
    <div className="w-full h-[60px] bg-[#1e28320d]">
      <TopHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
