import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={s.navigation}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;
