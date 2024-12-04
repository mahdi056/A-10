import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Visa Navigator Portal</h3>
            <p className="text-gray-400">
              Your trusted partner in visa processing and assistance for all your travel and study needs.
            </p>
          </div>
          
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/allvisas" className="text-gray-400 hover:text-white">Visas</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@visanavigator.com</p>
            <p className="text-gray-400">Phone: +1 800 123 4567</p>
            <p className="text-gray-400">Address: 1234 Visa St, City, Country</p>
          </div>

     
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            <FaFacebook></FaFacebook>
            <FaXTwitter></FaXTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedinIn></FaLinkedinIn>
              
            </div>
          </div>

        </div>
        
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Visa Navigator Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
