import React from "react";
import google from '../Images/googlepartner.png';
import Microsoft from '../Images/microsoftpartner.png';
import inc500 from '../Images/inc500.png';
import meta from '../Images/meta.png';
import hosport from '../Images/HubSpot.png';
import amazon from '../Images/amazon-Ads.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#002f5f] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Digital Marketing Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Digital Marketing Services</h3>
          <ul className="space-y-2">
            <li><a href="/web-design" className="text-white hover:underline">Web Design</a></li>
            <li><a href="/ppc-advertising" className="text-white hover:underline">PPC Advertising</a></li>
            <li><a href="/organic-seo" className="text-white hover:underline">Organic SEO</a></li>
            <li><a href="/email-sms-marketing" className="text-white hover:underline">Email & SMS Marketing</a></li>
            <li><a href="/social-media-marketing" className="text-white hover:underline">Social Media Marketing</a></li>
          </ul>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <Link to="/ourwork" className="text-white hover:underline">About SiteSence</Link>
            <li><a href="/testimonials" className="text-white hover:underline">Testimonials</a></li>
            <li><a href="/meet-the-team" className="text-white hover:underline">Meet The Team</a></li>
            <li><a href="/careers" className="text-white hover:underline">Careers</a></li>
            <Link to="/Contact" className="text-white hover:underline">Contact Us</Link>
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/thought-leadership" className="text-white hover:underline">Thought Leadership</a></li>
            <li><a href="/our-work" className="text-white hover:underline">Our Work</a></li>
            <li><a href="/partners" className="text-white hover:underline">Partners</a></li>
            <li><a href="/industries-we-serve" className="text-white hover:underline">Industries We Serve</a></li>
            <li><a href="/blog" className="text-white hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Recent Blog Posts */}
        <div>
          <h3 className="font-bold text-lg mb-4">Recent Blog Posts</h3>
          <ul className="space-y-3">
            <li>
              <p className="text-sm text-gray-300">February 17, 2025</p>
              <p><a href="/blog/email-marketing-mistakes" className="text-white hover:underline">9 of the Most Common Email Marketing Mistakes We've Found While Auditing Over 40 Accounts</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 14, 2025</p>
              <p><a href="/blog/holiday-email-marketing-strategies" className="text-white hover:underline">12 Holiday Email Marketing Strategies To Skyrocket Sales</a></p>
            </li>
            <li>
              <p className="text-sm text-gray-300">February 12, 2025</p>
              <p><a href="/blog/common-seo-myths" className="text-white hover:underline">7 Common SEO Myths You Should Ignore In 2025</a></p>
            </li>
          </ul>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center space-x-4 mt-8">
        <img src={inc500} alt="Inc 5000" className="h-10" />
        <img src={google} alt="Google Partner" className="h-10" />
        <img src={Microsoft} alt="Microsoft Partner" className="h-10" />
        <img src={meta} alt="Meta Business Partner" className="h-10" />
        <img src={hosport} alt="HubSpot Partner" className="h-10" />
        <img src='https://www.amst.com/user/blogs/35870/imghero-f.png?t=1718395912' alt="BBB A+ Rating" className="h-10" />
        <img src={amazon} alt="Amazon Ads Partner" className="h-10" />
        <img src='https://logovtor.com/wp-content/uploads/2021/08/klaviyo-logo-vector.png' alt="Klaviyo Partner" className="h-10" />
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 border-t border-gray-500 pt-4 text-center">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <span className="text-xl text-blue-500 font-[500]">Site<span className="text-blue-300 ">sence</span></span>
          <div className="flex space-x-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo-500x281.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo-500x281.png" alt="Twitter/X" className="h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/Black-YouTube-logo.png" alt="YouTube" className="h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png" alt="LinkedIn" className="h-6" />
            </a>
          </div>
        </div>
        <p className="text-sm">Privacy Policy © 2011-2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
