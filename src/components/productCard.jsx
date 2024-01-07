import React from "react";
import Row from "./common/row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = ({ data }) => {
  return (
    <Link className="w-full shadow pb-[5px]" to={`/product/${data._id}`}>
      <img
        className="w-full object-cover h-[400px]"
        src={data.img}
        alt={data.title}
      />
      <Row className="px-[10px]">
        <p className="text-[16px] text-black font-semibold mt-[16px]">
          {data.title}
        </p>
      </Row>
      <Row className="mb-[10px] px-[10px] mt-[10px] justify-between">
        <p className="text-[16px] text-[#00000080]  ">{data.category.title}</p>
        <p className="text-[16px] text-[#00000080] font-semibold  ">
          {data.price}
        </p>
      </Row>
    </Link>
  );
};

export default ProductCard;
