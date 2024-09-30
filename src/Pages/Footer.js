import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold" style={{ color: '#EAD8B1' }}>Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2" style={{ color: '#EAD8B1' }}>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
               <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                 <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
               <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
               <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2" style={{ color: '#EAD8B1' }}>Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://www.creative-tim.com/presentation?ref=njs-profile">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://blog.creative-tim.com?ref=njs-profile">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://www.github.com/creativetimofficial?ref=njs-profile">
                      Github
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm font-semibold mb-2" style={{ color: '#EAD8B1' }}>Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://creative-tim.com/terms?ref=njs-profile">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://creative-tim.com/privacy?ref=njs-profile">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blueGray-800 font-semibold block pb-2 text-sm" style={{ color: '#EAD8B1' }} href="https://creative-tim.com/contact-us?ref=njs-profile">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1" style={{ color: '#EAD8B1' }}>
              Copyright © {currentYear}{' '}
              <a href="https://www.creative-tim.com/product/notus-js" className="hover:text-gray-800" target="_blank" rel="noreferrer" style={{ color: '#EAD8B1' }}>
                Notus JS
              </a>{' '}
              by{' '}
              <a href="https://www.creative-tim.com?ref=njs-profile" className="hover:text-blueGray-800" target="_blank" rel="noreferrer" style={{ color: '#EAD8B1' }}>
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
