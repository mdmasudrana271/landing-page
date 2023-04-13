import React from "react";
import logo from "../../assets/img/3cb3fbee952630b0a26f3c8c211651e9 (1).png"
import { FaFacebook,FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y text-gray-100">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img src={logo} alt="" />
            </div>
            <h2 className='text-white self-center text-2xl font-semibold'>OR <span className='text-orange-300'>BIDO</span></h2>
          </div>
          <p className="text-xs text-slate-400">A new way to make the payments <br /> easy, reliable and secure.</p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white">
            Usefull Links
            </h3>
            <ul className="space-y-1">
              <li>
              Content
              </li>
              <li>
              How it Works
              </li>
              <li>
              Create
              </li>
              <li>
              Explore
              </li>
              <li>
              Terms & Services
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white">
            Community
            </h3>
            <ul className="space-y-1">
              <li>
              Help Center
              </li>
              <li>
              Partners
              </li>
              <li>
              Suggestions
              </li>
              <li>
              Blog
              </li>
              <li>
              Newsletters
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-white">Partner</h3>
            <ul className="space-y-1">
              <li>
              Our Partner
              </li>
              <li>
              Become a Partner
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400 flex justify-between items-center">
      <p>Copyright © 2023 Orbido. All Rights Reserved.</p>
      <div className="flex justify-center items-center text-xs text-white gap-8">
        <FaInstagram></FaInstagram>
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaLinkedin></FaLinkedin>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
