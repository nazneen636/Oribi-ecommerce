import React, { useEffect, useState } from "react";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import ProductItem from "./ProductItem";
import axios from "axios";

const SpecialOffer = () => {
  let [spOffProduct, setSpOffProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      setSpOffProduct(response.data.products);
      console.log(spOffProduct);
    };
    getData();
  }, []);
  return (
    <div>
      <Container className="mt-8 md:mt-32 mb-10">
        <div className="">
          <Heading headingText="Special Offers" className="ml-5 md:ml-0" />
          <div className="mt-3 md:mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 mx-4 md:mx-0">
            {spOffProduct
              .filter((item, index) => index >= 10 && index < 14)
              .map((item, index) => (
                <ProductItem
                  key={index}
                  productImage={item.thumbnail}
                  productTitle={item.title}
                  productPrice={item.price}
                  productColorVariant={item.brand}
                  productBadge={item.discountPercentage}
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
