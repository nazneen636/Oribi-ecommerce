import React, { useState } from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import { Image } from "antd";
import { IoClose } from "react-icons/io5";
import product1 from "/New Arrival/new1.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import Btn from "../layers/Btn";

const Cart = () => {
  let [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="flex gap-1 bg-slate-200 py-8 px-5">
          <div className="header w-1/5">Product</div>
          <div className="header w-1/5">Size</div>
          <div className="header w-1/5">Price</div>
          <div className="header w-1/5">Quantity</div>
          <div className="header w-1/5">Total</div>
        </div>
        <div className="flex items-center gap-1 bg-[#F5F5F3]  border border-[#F0F0F0] py-[30px] px-5">
          <div className="w-1/5 header flex gap-1 items-center">
            <IoClose className="header" />
            <Image
              className="!w-[100px] !h-[100px]"
              src={product1}
              alt={product1}
            />
            <h4 className="header">Product name</h4>
          </div>
          <div className="w-1/5 header">
            <ul className="flex flex-col gap-1">
              <li>
                <input
                  name="size"
                  type="radio"
                  className="appearance-none w-[11px] h-[11px] border border-[#262626] relative after:absolute after:w-[7px] after:h-[7px] after:bg-transparent after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-[#262626]"
                  id="s"
                />{" "}
                <label htmlFor="s">S</label>
              </li>
              <li>
                <input
                  name="size"
                  type="radio"
                  className="appearance-none w-[11px] h-[11px] border border-[#262626] relative after:absolute after:w-[7px] after:h-[7px] after:bg-transparent after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-[#262626]"
                  id="m"
                />{" "}
                <label htmlFor="m">M</label>
              </li>
              <li>
                <input
                  name="size"
                  type="radio"
                  className="appearance-none w-[11px] h-[11px] border border-[#262626] relative after:absolute after:w-[7px] after:h-[7px] after:bg-transparent after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-[#262626]"
                  id="l"
                />{" "}
                <label htmlFor="l">L</label>
              </li>
              <li>
                <input
                  name="size"
                  type="radio"
                  className="appearance-none w-[11px] h-[11px] border border-[#262626] relative after:absolute after:w-[7px] after:h-[7px] after:bg-transparent after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-[#262626]"
                  id="xl"
                />{" "}
                <label htmlFor="xl">XL</label>
              </li>
            </ul>
          </div>
          <div className="w-1/5 header">
            <h4 className="text-xl header">$44.00</h4>
          </div>
          <div className="w-1/5">
            <div className="header w-36 grid grid-cols-3 border border-[#F0F0F0]">
              <div
                onClick={() =>
                  setQuantity(() => (quantity > 1 ? quantity-- : quantity))
                }
                className="flex justify-center items-center py-2 px-1"
              >
                <FaMinus />
              </div>
              <div className="flex justify-center items-center py-2 px-1 header">
                {quantity}
              </div>
              <div
                onClick={() => setQuantity(() => quantity++)}
                className="flex justify-center items-center py-2 px-1"
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="w-1/5 header">
            <h4 className="text-xl header">$44.00</h4>
          </div>
        </div>
        <div className="coupon flex w-full bg-slate-200">
          {" "}
          <input
            className="bg-transparent w-full px-5 placeholder:font-bold placeholder:text-base outline-none text-[#262626] text-xl"
            type="text"
            placeholder="Apply coupon"
          />
          <button
            className="bg-slate-800 text-white rounded-l-[20px] w-44 py-3
          "
          >
            Update cart
          </button>
        </div>
        <div className="mt-[54px] flex flex-col items-end">
          <h3 className="text-xl mb-6 font-bold text-[#262626]">Cart totals</h3>
          <div className="w-[644px] grid grid-cols-2 mb-[30px]">
            <div className="border border-[#f0f0f0] py-4 pl-5">
              <h4 className="font-bold text-base text-[#262626]">Subtotal</h4>
            </div>
            <div className="border border-[#f0f0f0] py-4 pl-5">
              <p className="text-base">389.99 $</p>
            </div>
            <div className="border border-[#f0f0f0] py-4 pl-5">
              <h4 className="font-bold text-base text-[#262626]">Total</h4>
            </div>
            <div className="border border-[#f0f0f0] py-4 pl-5">
              <p className="text-base">389.99 $</p>
            </div>
          </div>
          <Btn className="mt-[30px]" btnText="Proceed to Checkout" />
        </div>
      </Container>
    </div>
  );
};

export default Cart;
