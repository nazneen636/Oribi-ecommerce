import React, { useEffect, useState } from "react";
import BredCumb from "../layers/BredCumb";
import Pagination from "../layers/Pagination";
import { IoGrid } from "react-icons/io5";
import { FaPlus, FaThList } from "react-icons/fa";
import Container from "../layers/Container";
import { BiSolidRightArrow } from "react-icons/bi";
// import FilterLi from "../layers/filterLi";
import axios from "axios";

let subCat = [
  {
    id: 1,
    name: "Sub Category 1",
  },
  {
    id: 2,
    name: "Sub Category 2",
  },
  {
    id: 3,
    name: "Sub Category 3",
  },
  {
    id: 4,
    name: "Sub Category 4",
  },
  {
    id: 5,
    name: "Sub Category 5",
  },
];

const ProductPage = () => {
  const [itemPerPage, setItemPerPage] = useState(12);
  let manageItemPerPage = (element) => {
    let numberConverter = Number(element.target.value);
    setItemPerPage(numberConverter);
  };
  // =============================
  let [showCat, setShowCat] = useState();
  let [allProduct, setAllProduct] = useState([]);

  let manageCat = () => {
    setShowCat(!showCat);
  };

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("https://dummyjson.com/products");
      setAllProduct(res.data.products);
    };
    getData();
  }, []);

  return (
    <div>
      <Container>
        <BredCumb />
        <div className="grid grid-cols-4 gap-10">
          {/* ==================category=========== */}
          <div className="col-span-1">
            <div>
              <h2
                onClick={manageCat}
                className="header !text-xl flex items-center justify-between cursor-pointer mb-9"
              >
                Shop by Category
                <BiSolidRightArrow
                  className={`duration-500 transition-all ${
                    showCat ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </h2>

              {showCat && (
                <ul>
                  {allProduct.map((item) => (
                    <li
                      key={item.id}
                      className="py-3 border-b border-b-[#f0f0f0]"
                    >
                      {item.category}
                    </li>
                  ))}
                  {/* <FilterLi categoryName="Category 1" DDmIcon={true}>
                    {subCat.map((item) => (
                      <li key={item.id} className="py-3">
                        {item.name}
                      </li>
                    ))}
                  </FilterLi>
                  <FilterLi categoryName="Category 2" DDmIcon={false} />
                  <FilterLi categoryName="Category 3" DDmIcon={true}>
                    <li className="py-3">Sub Category 1</li>
                    <li className="py-3">Sub Category 2</li>
                  </FilterLi> */}
                </ul>
              )}
            </div>
          </div>
          {/* ==================category=========== */}
          <div className="col-span-3">
            <div className="header flex justify-between items-center">
              <div className="icon flex gap-x-5 ">
                <div className="w-9 h-9 flex items-center justify-center text-[#737373] border border-[#F0F0F0] hover:text-white hover:bg-black hover:border-black duration-300 transition-all">
                  <IoGrid />
                </div>
                <div className="w-9 h-9 flex items-center justify-center text-[#737373] border border-[#F0F0F0] hover:text-white hover:bg-black hover:border-black duration-300 transition-all">
                  <FaThList />
                </div>
              </div>
              <div className="select flex gap-x-10">
                <div className="flex gap-x-4 text-base leading-[36px] text-[#767676]">
                  <label htmlFor="" className="">
                    <span className="">Sort by:</span>
                  </label>
                  <select
                    className="py-1 w-[239px] px-5 border border-[#F0F0F0] outline-none"
                    name=""
                    id=""
                  >
                    <option value="featured">Featured</option>
                    <option value="Featured">Featured</option>
                    <option value="Featured">Featured</option>
                    <option value="Featured">Featured</option>
                  </select>
                </div>
                <div className="flex gap-x-4 text-base leading-[36px] text-[#767676]">
                  <label htmlFor="" className="">
                    <span className="">Show:</span>
                  </label>
                  <select
                    className="py-1 w-[139px] px-5 border border-[#F0F0F0] outline-none"
                    onChange={manageItemPerPage}
                    name=""
                    id=""
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="72">72</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="">
              <Pagination itemsPerPage={itemPerPage} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
