import React, { useContext } from "react";
import SearchIcon from "../../svgs/SearchIcon";
import RotatedSquare from "../../svgs/RotatedSquare";
import UserIcon from "../../svgs/UserIcon";
import HeaderButton from "./headerButton";
import BucketIcon from "../../svgs/BucketIcon";
import Row from "../common/row";
import { cartContext } from "../../CONTEXTAPIs";

const TopHeader = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <div className="h-full px-[10%] w-full ">
      <Row className="flex items-center h-full justify-between">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
          <RotatedSquare />
        </Row>
        <Row>
          <HeaderButton title="Account" Icon={UserIcon} />
          <HeaderButton
            title={`Cart (${cartItems.length})`}
            Icon={BucketIcon}
            url="/Cart"
          />
        </Row>
      </Row>
    </div>
  );
};

export default TopHeader;
