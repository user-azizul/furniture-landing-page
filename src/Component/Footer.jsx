import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-16 pb-6">
      <Container
        className={"grid grid-cols-2 md:grid-cols-5 gap-8  sm:place-items-start"}
      >
        <div className="md:col-span-2">
          <h2 className="text-xl mb-4">
            <Link to="/" className="font-bold">
              Fenisha
            </Link>
          </h2>
          <p className="md:mr-12">
            {" "}
            The advantage of hiring a workpace with us is that gives you
            comfortable service and all-around facilities
          </p>
        </div>
        {/* services */}

        <div>
          <h2 className="text-base  font-semibold mb-4 text-primary ">
            Services
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                Campaingns
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                Branding
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base  font-semibold mb-4 text-primary ">
            Furniture
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                Email Beds
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                Chair
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                {" "}
                All
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-base  font-semibold mb-4 text-primary ">
            Follow Us
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li className='flex items-center'>
              {" "}
              <FaFacebookF />
              <Link to="/" className="hover:text-primary ml-2">
                {" "}
                Facebook
              </Link>
            </li>
            <li className='flex items-center'>
              <FaTwitter />
              <Link to="/" className="hover:text-primary ml-2">
                {" "}
                Twitter
              </Link>
            </li>
            <li className='flex items-center '>
              <FaInstagram />
              <Link to="/" className="hover:text-primary ml-2">
                {" "}
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      {/* copyright */}
      <Container className="mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4 text-sm "><p> Copyright &copy; {new Date().getFullYear()} </p>
      <div className=" space-x-2">
        <Link to='/'>Terms & Conditions</Link>
        <Link to='/'>Privecy Policy</Link>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
