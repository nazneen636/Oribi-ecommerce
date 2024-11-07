import React, { useState } from "react";
import BredCumb from "../layers/BredCumb";
import Container from "../layers/Container";
import Heading from "../layers/Heading";
import Btn from "../layers/Btn";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

const divisions = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barisal",
  "Rangpur",
  "Mymensingh",
];
const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cox's Bazar",
  "Cumilla",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

const SignUp = () => {
  // State hooks for form values and errors
  const [firstName, setFirstName] = useState("");
  const [fNameErr, setfNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [emailId, setEmailId] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordErr, setRepeatPasswordErr] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressOneErr, setAddressOneErr] = useState("");
  const [city, setCity] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [pCode, setPCode] = useState("");
  const [pCodeErr, setPCodeErr] = useState("");
  const [district, setDistrict] = useState("");
  const [districtErr, setDistrictErr] = useState("");
  const [division, setDivision] = useState("");
  const [divisionErr, setDivisionErr] = useState("");
  const [eye, setEye] = useState(true);

  // Input change handlers
  const handleInputChange = (setter, setterErr) => (e) => {
    setter(e.target.value);
    setterErr("");
  };

  // Password visibility toggle
  const togglePasswordVisibility = () => setEye(!eye);

  // Button click validation
  const handleSubmit = () => {
    if (!firstName) setfNameErr("First name is required");
    if (!lastName) setLastNameErr("Last name is required");
    if (!emailId) setEmailErr("Email is required");
    if (!phone) setPhoneErr("Phone no is required");
    if (!password) setPasswordErr("Password is required");
    else if (!/^(?=.*[0-9])/.test(password))
      setPasswordErr("Password must contain one digit from 1 to 9");
    else if (!/^(?=.*[a-z])/.test(password))
      setPasswordErr("Password must contain one lowercase letter");
    else if (!/^(?=.*[A-Z])/.test(password))
      setPasswordErr("Password must contain one uppercase letter");
    else if (!/^(?=.*\W)/.test(password))
      setPasswordErr("Password must contain one special character");
    else if (!/^.{8,16}/.test(password))
      setPasswordErr("Password must be 8-16 characters long");
    if (!repeatPassword) setRepeatPasswordErr("Repeat password is required");
    if (!addressOne) setAddressOneErr("Address is required");
    if (!city) setCityErr("City is required");
    if (!pCode) setPCodeErr("Post code is required");
    if (!district) setDistrictErr("District is required");
    if (!division) setDivisionErr("Division is required");
  };

  return (
    <div>
      <Container>
        <BredCumb />
        <p className="mb-[120px] w-[600px] text-[16px] leading-8 text-[#767676]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>

        {/* Personal Details Section */}
        <div className="personalDetail pb-[69px] border-b border-b-[#f0f0f09c]">
          <Heading className="mb-[42px]" headingText="Your Personal Details" />
          <div className="form flex flex-wrap gap-x-10 gap-y-8">
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="fName"
              >
                First Name
              </label>
              <input
                onChange={handleInputChange(setFirstName, setfNameErr)}
                value={firstName}
                id="fName"
                type="text"
                placeholder="First Name"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {fNameErr}
              </p>
            </div>

            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="lName"
              >
                Last Name
              </label>
              <input
                onChange={handleInputChange(setLastName, setLastNameErr)}
                value={lastName}
                id="lName"
                type="text"
                placeholder="Last Name"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {lastNameErr}
              </p>
            </div>

            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                onChange={handleInputChange(setEmailId, setEmailErr)}
                value={emailId}
                id="email"
                type="text"
                placeholder="company@domain.com"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {emailErr}
              </p>
            </div>

            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="phone"
              >
                Telephone
              </label>
              <input
                onChange={handleInputChange(setPhone, setPhoneErr)}
                value={phone}
                id="phone"
                type="text"
                placeholder="Your phone number"
                className="pb-4 border-b text-sm border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {phoneErr}
              </p>
            </div>
          </div>
        </div>

        {/* New Customer Section */}
        <div className="newCustomer mt-[60px] pb-[69px] border-b border-b-[#f0f0f09c]">
          <Heading className="mb-[42px]" headingText="New Customer" />
          <div className="form flex flex-wrap gap-x-10 gap-y-6">
            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={handleInputChange(setPassword, setPasswordErr)}
                value={password}
                id="password"
                type={eye ? "password" : "text"}
                placeholder="Enter Password"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              {eye ? (
                <IoMdEye
                  onClick={togglePasswordVisibility}
                  className="absolute top-[30px] right-[10px] cursor-pointer text-[#999]"
                />
              ) : (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="absolute top-[30px] right-[10px] cursor-pointer text-[#999]"
                />
              )}
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {passwordErr}
              </p>
            </div>

            <div className="w-[508px] flex flex-col gap-[10px] relative">
              <label
                className="font-bold text-[16px] leading-[23px] text-[#262626]"
                htmlFor="repeatPassword"
              >
                Repeat Password
              </label>
              <input
                onChange={handleInputChange(
                  setRepeatPassword,
                  setRepeatPasswordErr
                )}
                value={repeatPassword}
                id="repeatPassword"
                type={eye ? "password" : "text"}
                placeholder="Repeat Password"
                className="pb-4 text-sm border-b border-b-[#F0F0F0] outline-none text-[#262626] placeholder:text-[#767676]"
              />
              {eye ? (
                <IoMdEye
                  onClick={togglePasswordVisibility}
                  className="absolute top-[30px] right-[10px] cursor-pointer text-[#999]"
                />
              ) : (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="absolute top-[30px] right-[10px] cursor-pointer text-[#999]"
                />
              )}
              <p className="text-red-800 font-bold text-base absolute top-full left-0">
                {repeatPasswordErr}
              </p>
            </div>
          </div>
        </div>
        <div className="action w-full mt-[50px]">
          <Btn
            className="btn-primary"
            onClick={handleSubmit}
            btnText="Sign Up"
          />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
