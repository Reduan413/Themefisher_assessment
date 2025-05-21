"use client";
import SectionTitle from "@/components/elements/SectionTitle";
import AppContext from "@/context/AppContext";
import { useContext, useState } from "react";
import InputField from "./InputField";

const Contact = () => {
  const { sectionRefs } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <section id="contact" ref={sectionRefs.contact} className=" px-6 py-10">
      <SectionTitle title={"Contact"} />
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 mt-10"
      >
        <InputField
          name="firstName"
          placeholder="First name*"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          name="lastName"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={handleChange}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          name="phone"
          type="tel"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          textarea
        />

         <div className="group col-span-2 w-full rounded-lg bg-gradient-to-r from-[#F5BD4D] to-[#F89222] p-[1px] transition-all duration-300 mt-8">
          <button  type="submit" className="rounded-lg bg-black px-6 py-3 transition-all duration-300 group-hover:bg-transparent w-full">
            <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text font-dmSans text-base font-bold text-transparent transition-all duration-300 group-hover:text-white">
              Send message
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
