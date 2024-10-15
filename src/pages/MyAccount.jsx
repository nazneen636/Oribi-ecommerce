import React from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";

const MyAccount = () => {
  return (
    <div>
      <Container>
        <BredCumb />
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Dashboard
              </h3>
            </div>
            <div className="w-[918px] pb-5">
              Hello admin (not admin? Log out)
            </div>
          </div>
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Others
              </h3>
            </div>
            <div className="w-[918px] pb-5">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </div>
          </div>
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Downloads
              </h3>
            </div>
            <div className="w-[918px] pb-5"></div>
          </div>
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Addresses
              </h3>
            </div>
            <div className="w-[918px] pb-5"></div>
          </div>
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Account details
              </h3>
            </div>
            <div className="w-[918px] pb-5"></div>
          </div>
          <div className="flex items-center gap-10 w-full group text-base">
            <div className="w-[233px]">
              <h3 className="pb-5 font-bold border-b border-b-[#F0f0f0] group-hover:text-[#262626] duration-300 transition-all">
                Logout
              </h3>
            </div>
            <div className="w-[918px] pb-5"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyAccount;
