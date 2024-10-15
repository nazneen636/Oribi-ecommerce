import React from "react";
import Container from "../layers/Container";
import Li from "../layers/Li";
import footerLogo from "/footer-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] w-full md:mt-44 py-3 px-3 md:px-0 md:py-14">
      <Container className="">
        <div className="upper flex flex-col md:flex-row justify-between gap-5 md:gap-64 text-[12px] md:text-sm">
          <div className="right flex flex-wrap justify-between md:gap-36">
            <div className="right-1">
              <h4 className="font-bold md:mb-4 text-[#262626] text-[16px] leading-6">
                MENU
              </h4>
              <ul className="flex flex-col md:gap-1">
                <Li
                  liText="Home"
                  to="/home"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Shop"
                  to="/shop"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="About"
                  to="/about"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Contact"
                  to="/contact"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Journal"
                  to="/journal"
                  className="inline-block text-[#6D6D6D] hover:text-[#262626] hover:bg-transparent"
                />
              </ul>
            </div>
            <div className="right-2">
              <h4 className="font-bold md:mb-4 text-[#262626] text-[16px] leading-6">
                SHOP
              </h4>
              <ul className="flex flex-col md:gap-1">
                <Li
                  liText="Category 1"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Category 2"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Category 3"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Category 4"
                  to="/category"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Category 5"
                  to="/category"
                  className="inline-block text-[#6D6D6D] hover:text-[#262626] hover:bg-transparent"
                />
              </ul>
            </div>
            <div className="right-3">
              <h4 className="font-bold md:mb-4 text-[#262626] text-[16px] leading-6 ">
                HELP
              </h4>
              <ul className="flex flex-col md:gap-1">
                <Li
                  liText="Privacy Policy"
                  to="/policy"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Terms & Conditions"
                  to="/terms"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Special E-shop"
                  to="/eshop"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Shipping"
                  to="/shipping"
                  className="inline-block text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
                <Li
                  liText="Secure Payments"
                  to="/payments"
                  className="text-[#6D6D6D] leading-0 md:leading-6 !py-1 md:py-3 hover:text-[#262626] hover:bg-transparent"
                />
              </ul>
            </div>
            <div className="right-4 mt-4 md:mt-0">
              <a
                href="tel"
                className="block font-bold md:mb-[1px] text-[#262626] text-[16px] leading-0 md:leading-6"
              >
                (052) 611-5711
              </a>
              <a
                href="mailto"
                className="block font-bold md:mb-4 text-[#262626] text-[16px] leading-0 md:leading-6"
              >
                company@domain.com
              </a>
              <ul className="flex flex-col gap-1">
                <Li
                  liText="575 Crescent Ave. Quakertown, PA 1895"
                  className="inline-block text-[#6D6D6D] hover:text-[#262626] hover:bg-transparent leading-0 md:leading-6 !py-1 md:py-3"
                />
              </ul>
            </div>
          </div>
          <div className="left">
            <img src={footerLogo} alt={footerLogo} />
          </div>
        </div>
        <div className="bottom py-0 mt-4 md:mt-16 flex items-center justify-between gap-7 md:gap-[1119px]">
          <div className="left text-[#262626] flex gap-1 md:gap-6">
            <a href="https://www.facebook.com" className="">
              <FaFacebookF />
            </a>
            <a href="https://www.facebook.com" className="">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com" className="">
              <FaInstagram />
            </a>
          </div>
          <div className="right">
            <p className="text-[#6D6D6D] leading-6">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
