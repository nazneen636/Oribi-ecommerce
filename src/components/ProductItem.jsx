import React from "react";
import new1 from "/New Arrival/new1.png";
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProLi = ({ liText, icon, to }) => {
  return (
    <li>
      <Link
        className="text-[16px] text-[#767676] font-bold hover:text-black duration-300 transition-all flex gap-4 cursor-pointer"
        to={to}
      >
        {liText} {icon}
      </Link>
    </li>
  );
};

const ProductItem = ({
  productTitle,
  productImage,
  productPrice,
  productColorVariant,
  productBadge,
  className,
}) => {
  return (
    <div className={`w-auto md:w-[370px] group ${className}`}>
      <div className="w-full h-[370px] bg-[#F3F3F3] relative group">
        <img
          src={productImage}
          alt={productImage}
          className="w-full h-full object-cover border-b-2 border-[#26262625] hover:border-b-0"
        />
        <div className="overlay py-6 md:pr-7 w-full absolute left-0 -bottom-16 opacity-0 invisible bg-white group-hover:opacity-100 group-hover:visible group-hover:bottom-0 transition-all duration-500">
          <ul className="flex flex-col items-end gap-5">
            <ProLi
              liText="Add to Wish List"
              icon={<FaHeart className="text-black" />}
            />
            <ProLi
              liText="Compare"
              icon={<LuRefreshCcw className="text-black" />}
            />
            <ProLi
              to="/cart"
              liText="Add to Cart"
              icon={<IoCartSharp className="text-black" />}
            />
          </ul>
        </div>
        <div className="badge w-[92px] absolute left-5 top-5 px-8 py-2 bg-black text-white">
          <p>{productBadge}%</p>
        </div>
      </div>
      <div className="pt-6 bg-white group-hover:bg-[#FAEBEB] hover:border-b-2 hover:border-[#2626267c] duration-500 transition-all">
        <div className="flex justify-between ">
          <h3 className="text-black font-bold text-base md:text-[20px] leading-[120%]">
            {productTitle}
          </h3>
          <p className="text-[16px]">${productPrice}</p>
        </div>
        <p className="mt-4">{productColorVariant}</p>
      </div>
    </div>
  );
};

export default ProductItem;
