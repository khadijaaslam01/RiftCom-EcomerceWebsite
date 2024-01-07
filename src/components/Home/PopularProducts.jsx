import React, { useEffect, useState } from "react";
import Conatiner from "../common/conatiner";
import Row from "../common/row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import apiEndpoints from "../../apis/endpoint";
import client from "../../apis";

const PopularProduts = () => {
  const [products, setproducts] = useState([]);

  const getData = async () => {
    try {
      const response = await client.get(apiEndpoints.products());
      setproducts(response.data.docs);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Conatiner>
      <Row className="justify-center">
        <h1 className="text-[30px] text-[#1e28320] font-semibold uppercase my-[20px]">
          popular product
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[640px] w-[52px] relative">
          <p className="text-[34px] h-full w-[640px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`/product/${products[0]?._id}`}>
          <img
            className=" w-[640px] h-[640px] object-cover"
            src={products[0]?.img}
            alt="popular"
          />
        </Link>
        <Row className=" flex-wrap w-1/2 gap-[24px]">
          {products.slice(1).map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              className="w-[46%] h-[312px]"
              key={item._id}
            >
              <img
                className="w-[312px] h-full object-cover "
                src={item.img}
                alt={item.title}
              />
            </Link>
          ))}
        </Row>
      </Row>
    </Conatiner>
  );
};

export default PopularProduts;
