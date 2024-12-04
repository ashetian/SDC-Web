import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-left font-bold">&copy; {new Date().getFullYear()} KTUSDC. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://x.com/ktusdc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaXTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/ktu.sdc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://chat.whatsapp.com/Ib5NWLT1Zob1trceSid5R1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}