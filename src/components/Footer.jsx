import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#3A4D39] pt-10 sm:mt-10 w-full">
      <div className="max-w-6xl m-auto flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="my-4">
            <p className="text-[#ECE3CE] text-sm">
              Syaf shop adalah platform jual beli yang menyediakan berbagai
              barang kebutuhan untuk anabul kesayangan kamu.
            </p>
          </div>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            About
          </a>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            Services
          </a>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            Projects
          </a>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            Contact Us
          </a>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-[#ECE3CE] uppercase">Location</div>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            Syafshop
          </a>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            Jombang, Jawa Tengah, Indonesia
          </a>
          <a
            href="#"
            className="my-3 block text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            syafshop@gmail.com
          </a>
        </div>
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-[#ECE3CE] uppercase">Follow us</div>
          <a
            href="#"
            className="my-3 flex flex-row gap-[2px] items-center text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            <AiFillFacebook /> Syaf Shop Official
          </a>
          <a
            href="#"
            className="my-3 flex flex-row gap-[2px] items-center text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            <AiFillInstagram /> syafshop.official
          </a>
          <a
            href="#"
            className="my-3 flex flex-row gap-[2px] items-center text-[#ECE3CE] text-sm hover:text-gray-500"
          >
            <AiFillTwitterSquare /> syaffff
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
                    border-t border-gray-500 text-gray-400 text-sm 
                    flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2 text-[#ECE3CE]">
            © 2023 Syafshop, Inc. All Rights Reserved.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-twitter-alt"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-youtube"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
