import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, children }) => (

  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "bg-gold rounded px-1 py-1 text-lg font-normal text-left"
        : "text-lg font-normal text-left"
    }
  >
    {children}
  </NavLink>
);

export default NavLinkItem;