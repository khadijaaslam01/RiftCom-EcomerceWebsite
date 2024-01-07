import React from "react";
import Row from "../common/row";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="w-full  px-[10%] py-[80px]">
      <Row className="items-center w-full justify-between">
        <div className="w-[46%]">
          <h1 className="text-slate-950 text-[64px] font-normal ">
            Collections
          </h1>
          <p className="text-black text-[24px] mt-[45px] ">
            You can explore and shop many product differnet collections and from
            different brands here
          </p>
          <Button />
        </div>
        <div className="w-[46%]">
          <div className=" w-[400px] h-[500px] relative ">
            <img
              className="w-full h-full rounded-tl-[160px] rounded-br-[160px] animate-[wobble_10s_ease-in]"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              alt="hero"
            />
            <div className="animate-[wobble_10s_ease-in] absolute w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
