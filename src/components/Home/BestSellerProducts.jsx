import React, { useEffect, useState } from "react";
import Conatiner from "../common/conatiner";
import Row from "../common/row";
import ProductCard from "../productCard";
import apiEndpoints from "../../apis/endpoint";
import client from "../../apis";

const BestSellerProducts = () => {
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);

  const getData = async () => {
    try {
      const responseCat = await client.get(apiEndpoints.categories);
      setcategories(responseCat.data);
      handleGetProducts();
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleGetProducts = async (cid) => {
    try {
      const response = await client.get(apiEndpoints.products(12, cid));
      setproducts(response.data.docs);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Conatiner>
      <h1 className="text-[30px] w-full text-[#1e2832] mt-[80px] font-semibold text-center uppercase mb-[30px]">
        Best Seller Products
      </h1>

      <Row className="items-center">
        <p className="text-[16px] text-[#00000080] cursor-pointer hover:text-[#757575] mr-[40px] font-bold">
          All Products
        </p>
        {categories.map((items) => (
          <p
            onClick={() => handleGetProducts(items._id)}
            className="text-[16px] text-black  cursor-pointer hover:text-[#757575] mr-[40px]"
            key={items._id}
          >
            {items.title}
          </p>
        ))}
      </Row>
      <Row className="flex-wrap mt-[40px] gap-[1%]">
        {products.map((item) => (
          <div className="w-[24%] mb-[20px] " key={item._id}>
            <ProductCard data={item} />
          </div>
        ))}
      </Row>
    </Conatiner>
  );
};

export default BestSellerProducts;
