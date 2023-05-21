import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './Header.scss';
function Header() {
  return (
    <>
      <header className="jobs__header">
        <div className="jobs__header-container">
          <h1 className="jobs__header-logo">
            <div className="jobs__header-logo-img">
              <img src={logo} />
            </div>
            <p className="jobs__header-logo-title">Jobored</p>
          </h1>
          <nav className={'jobs__header-menu'}>
            <NavLink
              tabIndex={1}
              to="."
              className={({ isActive }) => (isActive ? 'menu__link-active' : 'menu__link')}
            >
              Поиск вакансий
            </NavLink>
            <NavLink
              tabIndex={2}
              to="favorites"
              className={({ isActive }) => (isActive ? 'menu__link-active' : 'menu__link')}
            >
              Избранное
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
