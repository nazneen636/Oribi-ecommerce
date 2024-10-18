import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const FilterLi = ({ DDmIcon, categoryName, children }) => {
  let [showDDmIcon, setShowDDmIcon] = useState(DDmIcon);
  let [showSubCat, setShowSubCat] = useState(false);

  const manageSubCat = () => {
    setShowSubCat(!showSubCat);
  };

  return (
    <li className="text-base leading-[30px]  py-5 border-b border-b-[#f0f0f0]">
      <span
        onClick={manageSubCat}
        className="flex items-center justify-between"
      >
        {categoryName}{" "}
        <FaPlus className={`${showDDmIcon ? "block" : "hidden"}`} />
      </span>
      {showDDmIcon && <>{showSubCat && <ul className="ml-5">{children}</ul>}</>}
    </li>
  );
};

export default FilterLi;
