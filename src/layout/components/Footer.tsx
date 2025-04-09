import Logo from "./Logo";

import SocialLinks from "./SocialLinks";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-10 bg-gray-50 shadow-sm">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 gap-y-5 py-5 text-gray-500 sm:grid-cols-[2fr_1fr] sm:pl-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-x-4">
          {/* text & logo */}
          <div className="space-y-4 p-1">
            <Logo />
            <p className="sm:w-8/12 md:w-8/12">
              Designing tomorrow’s digital landscape through the transformative
              power of Web3.
            </p>
            <SocialLinks />
          </div>

          {/* links */}
          {footerLinks.map((footerLink) => (
            <div className="p-1" key={footerLink.title}>
              <h2 className="text-lg font-semibold uppercase text-gray-500">
                {footerLink.title}
              </h2>
              <ul className="mt-3 space-y-3">
                {footerLink.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* footer copyright */}
        <div className="mt-5 border-t border-t-gray-300">
          <p className="p-3 text-center text-gray-400 md:p-5">
            Copyright &copy; {new Date().getFullYear()} Beejay keys.
            <span className="block pl-1 sm:inline-block">
              All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
