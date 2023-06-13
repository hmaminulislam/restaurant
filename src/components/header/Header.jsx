import React, { useState } from 'react'
import Logo from "../../assets/logos/logo.jpg"
import { Link, NavLink } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";
import PopupImg from '../../assets/header/book-modal-bg.jpg';
import '../header/header.css'


export default function Header() {
  // Time State 
    const [show, setShow] = useState(true)
    const handleToggle = () => {
        setShow(!show)
    }
    // datapicker
    const fullDate = new Date()
    let year = fullDate.getFullYear()
    let nextMonth = fullDate.getMonth() + 1
    let date = fullDate.getDate()
    let timeHour = fullDate.getHours()

    // if(timeHour > 12) {
    //   timeHour = (timeHour - 12) + "pm"
    // }else {
    //   timeHour = timeHour + "am"
    // }


    if(date < 10) {
      date = "0" + date
    }

    if(nextMonth < 10) {
      nextMonth = "0" + nextMonth
    }
    // minDate set 
    const minDate = `${year}-${nextMonth}-${date}`

    // maxDate set
    const maxDate = `${year}-${nextMonth}-${date + 6}`

    // Time conditon 
    console.log(timeHour - 5)

    // disabled pased hour

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
          className="modal-box w-11/12 max-w-3xl sm:flex justify-between items-center gap-5 "
        >
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="w-1/2 hidden sm:block">
            <img src={PopupImg} alt="" />
          </div>
          <div className="sm:w-1/2 w-full py-10 sm:py-0">
            <p className="text-center text-primary font-semibold">
              ONLINE RESERVATION
            </p>
            <h3 className="text-4xl text-center mt-4 mb-6">BOOK A TABLE</h3>
            <form className='text-center'>
              <select
                name="time"
                id="time"
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
              <div className='mt-3'>
              <input type="date" min={minDate} max={maxDate} className="input input-bordered w-full max-w-xs date" />
              </div>
              <select
                name="time"
                id="time"
                className="select select-bordered w-full max-w-xs mt-3"
              >
                <option value="08:00 am">08:00 am</option>
                <option value="09:00 am">09:00 am</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
                <option value="02:00 pm">02:00 pm</option>
                <option value="03:00 pm">03:00 pm</option>
                <option value="04:00 pm">04:00 pm</option>
                <option value="05:00 pm">05:00 pm</option>
                <option value="06:00 pm">06:00 pm</option>
                <option value="07:00 pm">07:00 pm</option>
                <option value="08:00 pm">08:00 pm</option>
                <option value="09:00 pm">09:00 pm</option>
                <option value="10:00 pm">10:00 pm</option>
                <option value="11:00 pm">11:00 pm</option>
              </select>
              <button className='btn-bg-primary w-full max-w-xs text-white py-3 mt-4 rounded'>BOOK NOW</button>
            </form>
          </div>
        </form>
      </dialog>
    </div>
  );
}
