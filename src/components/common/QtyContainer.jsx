import React, { useContext } from "react";
import Row from "./row";
import Button from "./Button";
import { cartContext } from "../../CONTEXTAPIs";

const QtyContainer = ({ data }) => {
  // const [qty, setQty] = useState(0);
  const { cartItems, handleInc, handleDec } = useContext(cartContext);
  const cartItem = cartItems.find((item) => item._id === data?._id);
  return (
    <Row className=" items-center">
      <Button
        onClick={() => handleDec(data)}
        tilte="-"
        className="w-[52px] h-[52px]"
      />
      <p className="text-center text-[18px] font-semibold w-[70px]">
        {cartItem?.qty || 0}
      </p>
      <Button
        onClick={() => handleInc(data)}
        className=" w-[52px] h-[52px]"
        tilte="+"
      />
    </Row>
  );
};

export default QtyContainer;
