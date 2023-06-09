import Logo from '../../assets/logos/logo-2.png'
import { IoIosCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import '../footer/footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-overley">
        <div className="max-w-[1300px] mx-auto px-5 py-20 flex justify-between flex-wrap-reverse sm:flex-wrap gap-x-5 gap-y-10">
          <div className="max-w-[350px]">
            <img className="w-[120px]" src={Logo} alt="" />
            <p className="font-[300] mt-4 mb-6">
              There are many variations of passages of Ipsum available, but the
              majority suffered alteration in some form randomised words
              injected.{" "}
            </p>
            <div className="flex items-center gap-3">
              <span className="footer-icon">
                <FaFacebookF />
              </span>
              <span className="footer-icon">
                <FaTwitter />
              </span>
              <span className="footer-icon">
                <FaInstagram />
              </span>
              <span className="footer-icon">
                <FaLinkedinIn />
              </span>
              <span className="footer-icon">
                <FaYoutube />
              </span>
            </div>
          </div>
          {/* Our Menu  */}
          <div>
            <h4 className="footer-heading">Short Link</h4>
            <div className="mt-4">
              <ul className="flex flex-col gap-3 list-[square] ml-6">
                <li>
                  <Link className='footer-link' to="/">Home</Link>
                </li>
                <li>
                  <Link className='footer-link' to="/our-menu">Our Menu</Link>
                </li>
                <li>
                  <Link className='footer-link' to="/about">About</Link>
                </li>
                <li>
                  <Link className='footer-link' to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className='footer-link' to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Our Link  */}
          <div>
            <h4 className="footer-heading">Help Link</h4>
            <div className="mt-4">
              <ul className="flex flex-col gap-3 list-[square] ml-6">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>FAQ</li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
          {/* contact info */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="mt-5">
                <Link
                  className="flex items-center gap-2 border-b border-orange-600 pb-5 mb-4"
                  to="tel:+049 04394 0934"
                >
                  <IoIosCall className="text-[22px]" /> +049 04394 0934
                </Link>
              <Link to="mailto:dexos@gmail.com" className="flex items-center gap-3 border-b border-orange-600 pb-5 mb-4">
                <FaEnvelope className="text-[18px]" /> dexos@gmail.com
              </Link>
              <Link className="flex items-center gap-3 border-b border-orange-600 pb-5 mb-4">
                <MdLocationPin className="text-[22px]" /> Blackwell Street,Dry
                Creek,Alaska
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mx-auto max-w-[1200px]">
          <div className="border-b"></div>
          <p className="mt-8 pb-6 font-[300]">Copyright All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer