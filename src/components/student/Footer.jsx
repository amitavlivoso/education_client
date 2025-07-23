import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#3162b4] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        {/* Logo + About */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4 font-bold text-lg">
            <img src={logo} alt="EduMove" className="w-8 h-8" />
            EduMove
          </div>
          <p className="text-sm text-gray-100">
            India's most trusted platform for NEET & JEE preparation. Expert faculty, curated materials, live sessions, and test series to help students succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-100">
            <li className="flex justify-center sm:justify-start items-center gap-2"><FaPhoneAlt /> +91 654-889-0104</li>
            <li className="flex justify-center sm:justify-start items-center gap-2"><FaEnvelope /> edumove.rivera@example.com</li>
            <li className="flex justify-center sm:justify-start items-center gap-2"><FaMapMarkerAlt /> ICR Village, Nuapalli, Bhubaneswar, 751015</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-3 mt-2">
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
