import React, { useState } from "react";
import Container from "../layers/Container";
import BredCumb from "../layers/BredCumb";
import Heading from "../layers/Heading";

const Contacts = () => {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [message, setMessage] = useState("");
  let [formSubmitted, setFormSubmitted] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const manageName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  const manageEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const manageMessage = (e) => {
    setMessage(e.target.value);
  };

  const managePost = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setNameErr("Name is required");
      valid = false;
    }

    if (!email) {
      setEmailErr("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailErr("Please enter a valid email address");
      valid = false;
    }

    if (valid) {
      setFormSubmitted(true);
      // Clear form fields if needed
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <Container>
        <BredCumb />
        <Heading headingText="Fill up a Form" />
        <form className="mt-[42px] mb-[140px]" onSubmit={managePost}>
          <div className="max-w-[779px] flex flex-col gap-6">
            <div className="w-full flex flex-col gap-[10px] relative">
              <label
                className="text-base font-bold text-[#262626] leading-6"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={manageName}
                value={name}
                className="text-sm border-b border-b-[#F0F0F0] pb-4 outline-none"
                type="text"
                placeholder="Your name here"
                id="name"
              />
              {nameErr && (
                <p className="text-red-800 text-sm font-semibold absolute left-0 top-full">
                  {nameErr}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px] relative">
              <label
                className="text-base font-bold text-[#262626] leading-6"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={manageEmail}
                value={email}
                className="text-sm border-b border-b-[#F0F0F0] pb-4 outline-none"
                type="text"
                placeholder="Your email here"
                id="email"
              />
              {emailErr && (
                <p className="text-red-800 text-sm font-semibold absolute left-0 top-full">
                  {emailErr}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col gap-[10px] relative">
              <label
                className="text-base font-bold text-[#262626] leading-6"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                onChange={manageMessage}
                value={message}
                className="h-[90px] resize-none text-sm border-b border-b-[#F0F0F0] pb-4 outline-none"
                placeholder="Your message here"
                id="message"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-11 text-[#262626] font-bold text-sm px-10 py-4 bg-white border border-[#262626] hover:bg-black hover:text-white duration-500 transition-all w-[200px]"
          >
            Post
          </button>
          {formSubmitted && (
            <p className="text-green-600 mt-4">Form submitted successfully!</p>
          )}
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58441.889984476766!2d90.37168879107473!3d23.72532739374507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1728409801285!5m2!1sbn!2sbd"
          className="w-full h-[572px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
};

export default Contacts;
