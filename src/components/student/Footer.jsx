// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-[#3162b4] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-white font-bold text-lg">
            <img src={logo} alt="EduMove" className="w-8 h-8" />
            EduMove
          </div>
          <p className="text-sm text-gray-100">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact us</h4>
          <ul className="space-y-3 text-sm text-gray-100">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 654-889-0104</li>
            <li className="flex items-center gap-2"><FaEnvelope /> edumove.rivera@example.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> ICR Village, Nuapalli, Bhubaneswar, 751015</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-3 mt-2">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-300 border-t border-white/20 pt-6">
        © Copyright 2025 | All Rights Reserved
      </div>
    </footer>
  );
}
