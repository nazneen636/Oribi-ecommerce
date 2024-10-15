import React, { useState } from "react";
import Container from "../layers/Container";
import Btn from "../layers/Btn";
import BredCumb from "../layers/BredCumb";
import Heading from "../layers/Heading";
import { VscTriangleUp } from "react-icons/vsc";

const CheckOut = () => {
  let [fName, setFName] = useState();
  let [fNameErr, setFNameErr] = useState();

  let [lName, setLName] = useState();
  let [lNameErr, setLNameErr] = useState();

  let [country, setCountry] = useState();
  let [countryErr, setCountryErr] = useState();

  let [street, setStreet] = useState();
  let [streetErr, setStreetErr] = useState();

  let [city, setCity] = useState();
  let [cityErr, setCityErr] = useState();

  let [post, setPost] = useState();
  let [postErr, setPostErr] = useState();

  let [phone, setPhone] = useState();
  let [phoneErr, setPhoneErr] = useState();

  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState();

  let firstNameCheck = (e) => {
    let fn = e.target.value;
    setFName(fn);
    console.log(fName);

    setFNameErr("");
  };

  let lastNameCheck = (e) => {
    let ln = e.target.value;
    setLName(ln);
    setLNameErr("");
  };

  let countryCheck = (e) => {
    let c = e.target.value;
    setCountry(c);
    setCountryErr("");
  };

  let streetCheck = (e) => {
    let s = e.target.value;
    setStreet(s);
    setStreetErr("");
  };

  let cityCheck = (e) => {
    let c = e.target.value;
    setCity(c);
    setCityErr("");
  };

  let postCheck = (e) => {
    let p = e.target.value;
    setPost(c);
    setPostErr("");
  };

  let phoneCheck = (e) => {
    let p = e.target.value;
    setPhone(p);
    setPhoneErr("");
  };

  let emailCheck = (e) => {
    let ema = e.target.value;
    setEmail(ema);
    setEmailErr("");
  };

  let manageBtn = (e) => {
    if (!fName) {
      setFNameErr("First name is required");
    }
    if (!lName) {
      setLNameErr("Last name is required");
    }
    if (!country) {
      setCountryErr("Country is required");
    }
    if (!street) {
      setStreetErr("Street is required");
    }
    if (!city) {
      setCityErr("City is required");
    }
    if (!post) {
      setPostErr("Post code is required");
    }
    if (!phone) {
      setPhoneErr("Phone is required");
    }
    if (!email) {
      setEmailErr("Email is required");
    }
  };
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="text-base leading-[30px] mb-[119px]">
          <p>
            Have a coupon?{" "}
            <span className="text-[#262626]">
              Click here to enter your code
            </span>
          </p>
        </div>
        <Heading className="mb-10" headingText="Billing Details" />
        <form className="w-full flex flex-col gap-6" action="">
          <div className="name flex gap-10">
            <div className="w-full flex flex-col gap-[10px] relative">
              <label
                className="text-base text-[#262626] font-bold leading-6"
                htmlFor="fName"
              >
                First Name *
              </label>
              <input
                onChange={firstNameCheck}
                value={fName}
                className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
              />
              <p className="text-red-900 absolute left-0 top-full text-sm">
                {fNameErr}
              </p>
            </div>
            <div className="w-full flex flex-col gap-[10px] relative">
              <label
                className="text-base text-[#262626] font-bold leading-6"
                htmlFor="lName"
              >
                Last Name *
              </label>
              <input
                onChange={lastNameCheck}
                value={lName}
                className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
                type="text"
                name="lName"
                id="lName"
                placeholder="Last Name"
              />
              <p className="text-red-900 absolute left-0 top-full text-sm">
                {lNameErr}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="company"
            >
              Company Name (optional)
            </label>
            <input
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="company"
              id="company"
              placeholder="Company Name"
            />
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="country"
            >
              Country *
            </label>
            <input
              onChange={countryCheck}
              value={country}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="country"
              id="country"
              placeholder="Please select"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {countryErr}
            </p>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="street"
            >
              Street Address *
            </label>
            <input
              onChange={streetCheck}
              value={street}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="street"
              id="street"
              placeholder="House number and street name"
            />
            <input
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name=""
              id=""
              placeholder="Apartment, suite, unit etc. (optional)"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {streetErr}
            </p>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="city"
            >
              Town/City *
            </label>
            <input
              onChange={cityCheck}
              value={city}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="city"
              id="city"
              placeholder="Town/City"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {cityErr}
            </p>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="country"
            >
              County (optional)
            </label>
            <input
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="company"
              id="company"
              placeholder="County"
            />
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="post"
            >
              Post Code *
            </label>
            <input
              onChange={postCheck}
              value={post}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="post"
              id="post"
              placeholder="Post Code"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {postErr}
            </p>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="phone"
            >
              Phone *
            </label>
            <input
              onChange={phoneCheck}
              value={phone}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {phoneErr}
            </p>
          </div>
          <div className="w-full flex flex-col gap-[10px] relative">
            <label
              className="text-base text-[#262626] font-bold leading-6"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              onChange={emailCheck}
              value={email}
              className="pb-4 text-sm w-full border-b border-b-[#F0f0f0] outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            <p className="text-red-900 absolute left-0 top-full text-sm">
              {emailErr}
            </p>
          </div>
        </form>
        <Heading
          className="mt-[130px] mb-[42px]"
          headingText="Additional Information"
        />
        <div className="flex flex-col gap-[10px] pb-[86px] border-b border-b-[#f0f0f0]">
          <h4 className="text-[#262626] font-bold leading-[23px] text-base">
            Other Notes (optional)
          </h4>
          <p className="">
            Notes about your order, e.g. special notes for delivery.
          </p>
        </div>
        <Heading className="mt-[129px]" headingText="Your Order" />
        <div className="max-w-[644px] mt-[47px] grid grid-cols-2 grid-rows-4">
          <div className="header border border-[#f0f0f0] py-4 px-5">
            Product
          </div>
          <div className="border border-[#f0f0f0] py-4 px-5">Total</div>
          <div className="header border border-[#f0f0f0] py-4 px-5">
            Product name x 1
          </div>
          <div className="border border-[#f0f0f0] py-4 px-5">389.99 $</div>
          <div className="header border border-[#f0f0f0] py-4 px-5">
            Subtotal
          </div>
          <div className="border border-[#f0f0f0] py-4 px-5">389.99 $</div>
          <div className="header border border-[#f0f0f0] py-4 px-5">Total</div>
          <div className="border border-[#f0f0f0] py-4 px-5">389.99 $</div>
        </div>
        <div className="border border-[#f0f0f0] mt-[70px] p-[30px] max-w-[1053px]">
          <Heading className="text-center" headingText="Payment Method" />
          <div className="flex items-center gap-[10px]">
            <input
              className="appearance-none relative w-[11px] h-[11px] border border-[#262626] rounded-full after:absolute after:left-1/2 after:top-1/2 after:bg-transparent after:w-[7px] after:h-[7px] after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2 checked:after:bg-black"
              type="radio"
              name="bank"
              id="bank1"
            />
            <label
              htmlFor="bank1"
              className="text-[#767676] text-base font-bold"
            >
              Bank
            </label>
          </div>
          <div className="mt-5 py-5 px-6 max-w-[985px] bg-[#f1f4f6] border border-[#979797] relative">
            <VscTriangleUp className="absolute left-8 top-[-22px] text-3xl text-[#f1f4f6]" />
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <div className="flex items-center gap-[10px] mt-[26px]">
            <input
              className="appearance-none relative w-[11px] h-[11px] border border-[#262626] rounded-full after:absolute after:left-1/2 after:top-1/2 after:bg-transparent after:w-[7px] after:h-[7px] after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2 checked:after:bg-black"
              type="radio"
              name="bank"
              id="bank2"
            />
            <label
              htmlFor="bank2"
              className="text-[#767676] text-base font-bold"
            >
              Bank 2
            </label>
          </div>
          <p className="mt-[15px] text-base text-[#767676] leading-[30px] max-w-[985px]">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </div>
        <Btn onClick={manageBtn} btnText="Proceed to Bank" className="mt-10" />
      </Container>
    </div>
  );
};

export default CheckOut;
