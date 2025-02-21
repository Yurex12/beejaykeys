import { NavLink } from "react-router-dom";
import { links } from "../constants";

function NavBar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-12">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink
              to={`/${link.href}`}
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-green-600" : ""
                } cursor-pointer border-2 border-white py-1 hover:border-b-green-600`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
