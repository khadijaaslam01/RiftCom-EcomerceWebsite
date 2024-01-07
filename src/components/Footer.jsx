import React from "react";
import Conatiner from "./common/conatiner";
import Row from "./common/row";

const Footer = () => {
  return (
    <Conatiner className="bg-black py-[14px] h-[52px]">
      <Row className="h-full text-white justify-between items-center">
        <p> © 2023 RiftCom inc.</p>
        <img className="w-[83px]" src="/imgs/cards.png" alt="cards" />
        <p>Scroll to Top</p>
      </Row>
    </Conatiner>
  );
};

export default Footer;
