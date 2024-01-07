import React from "react";
import Row from "../common/row";
import QtyContainer from "../common/QtyContainer";

const CartItem = ({ data }) => {
  const getTotal = () => {
    const price = parseInt(data.price.slice(1));
    return price * data.qty;
  };
  return (
    <Row className="rounded border-[1px] border-gray-400 mb-[30px]  py-[10px] px-[20px] items-center">
      <Row className="w-[20%] text-center">
        <img
          className="w-2/3 h-[160px] rounded-[6px] object-cover"
          src={data.img}
          alt={data.title}
        />
      </Row>
      <p className="text-[18px] text-black  font-medium w-[20%] text-center">
        {data.title}
      </p>
      <p className="text-[18px] text-black  font-medium w-[20%] text-center">
        {data.price}
      </p>
      <Row className=" w-[20%] justify-center">
        <QtyContainer data={data} />
      </Row>
      <p className="text-[18px] text-center text-black  font-medium w-[20%] ">
        ${getTotal()}
      </p>
    </Row>
  );
};

export default CartItem;
