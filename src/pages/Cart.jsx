import React, { useContext } from "react";
import Layout from "../components/common/Layout";
import Conatiner from "../components/common/conatiner";
import Row from "../components/common/row";
import CartItem from "../components/Cart/CartItem";
import { cartContext } from "../CONTEXTAPIs";

const Cart = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <Layout>
      <Conatiner className="my-[40px] ">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-medium">
            Cart Detail
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="w-full h-[40px] bg-gray-400 items-center px-[20px]">
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Quantity
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Total
            </h6>
          </Row>
          {cartItems.map((item) => (
            <CartItem data={item} key={item._id} />
          ))}
        </Row>
      </Conatiner>
    </Layout>
  );
};

export default Cart;
