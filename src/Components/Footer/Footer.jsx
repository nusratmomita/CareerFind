import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-100 footer sm:footer-horizontal bg-[#7194bc] text-base-content p-5">
      <aside>
        <img className="w-25 h-20 bg-white rounded-2xl" src={logo} alt="logo" />
        <h1 className="mt-2">
            <span className="underline text-gray-800  font-bold text-3xl">Career</span>
            <span className="underline text-gray-800 font-bold text-3xl">Find</span>
          </h1>
      </aside>
      <nav>
        <h6 className="footer-title text-2xl font-bold">Services</h6>
        <h1 className="text-xl font-bold">Connect With People</h1>
        <h1 className="text-xl font-bold">Get Referral</h1>
        <h1 className="text-xl font-bold">Find Job</h1>
      </nav>
      <nav>
        <h6 className="footer-title text-2xl font-bold">Companies Connected</h6>
        <h1 className="text-xl font-bold">Google</h1>
        <h1 className="text-xl font-bold">Amazon</h1>
        <h1 className="text-xl font-bold">Microsoft</h1>
        <h1 className="text-xl font-bold">AuthLab</h1>
      </nav>
        <nav>
            <h6 className="footer-title text-2xl font-bold text-blue-900 underline">Contact Us</h6>
            <h1 className="text-2xl font-bold">+880 123456789</h1>
            <address className="text-2xl font-bold">Email Us: <a className="text-2xl font-bold" href="mailto:nusratmomita5591@gmail.com">CareerFind</a></address>
            <h1 className="text-2xl font-bold"></h1>
        </nav>
    </footer>
  );
};

export default Footer;
