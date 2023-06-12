import React, { useState } from 'react'
import Logo from "../../assets/logos/logo.jpg"
import { Link, NavLink } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";
import PopupImg from '../../assets/header/book-modal-bg.jpg'


export default function Header() {
    const [show, setShow] = useState(true)
    const handleToggle = () => {
        setShow(!show)
    }
    // datapicker

  return (
    <div className="bg-white px-5 relative">
      <div className="max-w-[1300px] mx-auto md:h-[100px] md:flex items-center justify-between overflow-hidden">
        <div className="flex md:flex-none items-center justify-between h-[60px] md:h-auto">
          <div>
            <Link to="/">
              <img className="w-[120px]" src={Logo} alt="" />
            </Link>
          </div>
          <div className="md:hidden">
            <VscMenu
              onClick={handleToggle}
              className={`text-2xl cursor-pointer ${
                !show ? "text-primary" : ""
              }`}
            ></VscMenu>
          </div>
        </div>
        <div
          className={`bg-white md:bg-transparent absolute md:static w-full md:w-auto left-0 px-5 py-4 ${
            !show ? "block z-10" : "hidden md:block"
          }`}
        >
          <div className="md:flex items-center gap-10">
            <ul className="md:flex md:gap-8">
              <li className="font-semibold my-3 md:my-0 border-b border-gray-200 md:border-0 pb-2 md:pb-0 hover:text-[#FE5D26] transition duration-300">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="font-semibold my-3 md:my-0 border-b border-gray-200 md:border-0 pb-2 md:pb-0 hover:text-[#FE5D26] transition duration-300">
                <NavLink to="/our-menu">Our Menu</NavLink>
              </li>
              <li className="font-semibold my-3 md:my-0 border-b border-gray-200 md:border-0 pb-2 md:pb-0 hover:text-[#FE5D26] transition duration-300">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="font-semibold my-3 md:my-0 border-b border-gray-200 md:border-0 pb-2 md:pb-0 hover:text-[#FE5D26] transition duration-300">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="font-semibold my-3 md:my-0 border-b border-gray-200 md:border-0 pb-2 md:pb-0 hover:text-[#FE5D26] transition duration-300">
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
            <button
              onClick={() => window.BookPopUp.showModal()}
              className="btn-bg-primary text-white font-semibold py-[10px] px-6 rounded-sm hidden md:block"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {/* Book Popup  */}

      <dialog id="BookPopUp" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-3xl flex justify-between items-center gap-5"
        >
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="w-1/2">
            <img src={PopupImg} alt="" />
          </div>
          <div className="w-1/2">
            <p className="text-center text-primary font-semibold">
              ONLINE RESERVATION
            </p>
            <h3 className="text-3xl text-center">BOOK A TABLE</h3>
            <form>
              <select
                name="preson"
                id="person"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="1 person">1 Person</option>
                <option value="2 person">2 Person</option>
                <option value="3 person">3 Person</option>
                <option value="4 person">4 Person</option>
                <option value="5 person">5 Person</option>
                <option value="6 person">6 Person</option>
                <option value="7 person">7 Person</option>
                <option value="8 person">8 Person</option>
                <option value="9 person">9 Person</option>
                <option value="10 person">10 Person</option>
              </select>
              
            </form>
          </div>
        </form>
      </dialog>
    </div>
  );
}
