import React, { useContext, useEffect, useState } from "react";
import Conatiner from "../components/common/conatiner";
import Row from "../components/common/row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";
import QtyContainer from "../components/common/QtyContainer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import client from "../apis";
import apiEndpoints from "../apis/endpoint";
import { cartContext } from "../CONTEXTAPIs";

const ProductDetail = () => {
  const { handleInc } = useContext(cartContext);
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  const getProduct = async () => {
    try {
      const response = await client.get(apiEndpoints.product(id));
      setproduct(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Layout>
      <Conatiner className="my-[20px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="h-[80vh] w-full object-cover"
              src={product?.img}
              alt={product?.title}
            />
          </Row>
          <Row className="w-[47%] flex-col">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[40px]">
              {`${product.category?.title} | ${product?.title}`}
            </h1>
            <Row className="gap-[20px] my-[5px]">
              <p className="text-black text-[18px] font-medium  w-[15%]">
                Rating:
              </p>
              <p className="text-black text-[18px] ">{product?.rating}</p>
            </Row>
            <Row className="gap-[20px] my-[5px]">
              <p className="text-black text-[18px] font-medium w-[15%]">
                Price:
              </p>
              <p className="text-black text-[18px] ">{product?.price}</p>
            </Row>
            <Row className="gap-[20px] my-[5px]">
              <p className="text-black text-[18px] font-medium  w-[15%]">
                Category
              </p>
              <p className="text-black text-[18px] ">
                {product.category?.title}
              </p>
            </Row>
            <Row className="gap-[20px] my-[5px]">
              <p className="text-black text-[18px] font-medium  w-[15%]">
                Description:
              </p>
              <p className="text-black text-[18px] ">{product?.description}</p>
            </Row>
            <div className="mt-[30px]">
              <QtyContainer data={product} />
            </div>
            <Button
              onClick={() => handleInc(product)}
              tilte="Add To Cart"
              className="w-[174px] h-[52px] mt-[20px]"
            />
          </Row>
        </Row>
      </Conatiner>
    </Layout>
  );
};

export default ProductDetail;
