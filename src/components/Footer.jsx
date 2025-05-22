import React from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/g-akash-4b1b40256/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/google-akash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FaGithub />
            </a>
            
            
            
          </div>

          {/* Footer Text */}
          <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm space-y-1">
            <p>&copy; 2024 Guguloth Akash. All rights reserved.</p>
            <p>Built with ❤️ by Akash</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
