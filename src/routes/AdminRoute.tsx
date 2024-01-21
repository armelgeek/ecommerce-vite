import React, { useCallback, useContext } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AuthContext } from '../store/Provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import AuthState from '../components/auth/AuthState';
import { BsChat, BsPaperclip } from 'react-icons/bs';
import { FaCity, FaCodeBranch, FaHome } from 'react-icons/fa';
import { BiListOl } from 'react-icons/bi';

// @ts-ignore
const AdminRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch }: any = useContext(AuthContext);
  const isAuth = useAuth();
  const location = useLocation();
  const isActive = useCallback((route: string) => {
    return location.pathname == route;
  }, [location.pathname])
  return (
    <>
      <main>
        <aside className="sidebar">

          <ul className="sidebar-content">
            <li className={`${isActive('/admin') ? 'active' : ''}`}>
              <Link to={"/admin"} className="sidebar-menu py-4">
                <span className="sidebar-menu-icon">
                  <FaHome />
                </span>
                <span className="sidebar-menu-text">Dashboard</span>
                <span className="sidebar-menu-arrow">

                </span>
              </Link>

            </li>
            <div className="sidebar-menu-header">Produits</div>
            <li className={`${isActive('/admin/products') ? 'active' : ''}`}>
              <Link to={'/admin/products'} className="sidebar-menu">
                <span className="sidebar-menu-icon">
                  <BiListOl />
                </span>
                <span className="sidebar-menu-text">Catalogue de produits</span>
              </Link>
            </li>
            <div className="sidebar-menu-header">Forum</div>
              <li className={`${isActive('/admin/themes') ? 'active' : ''}`}>
                <Link to={'/admin/themes'} className="sidebar-menu">
                  <span className="sidebar-menu-icon">
                    <BsChat />
                  </span>
                  <span className="sidebar-menu-text">Themes de discussions</span>
                </Link>
              </li>
            <li className={`${isActive('/admin/sujets') ? 'active' : ''}`}>
              <Link to={'/admin/sujets'} className="sidebar-menu">
                <span className="sidebar-menu-icon">
                  <BsPaperclip />
                </span>
                <span className="sidebar-menu-text">Sujet de discussions</span>
              </Link>
            </li>
            
            <div className="sidebar-menu-header">Localisation</div>
            <li className={`${isActive('/') ? 'active' : ''}`}>
              <a href="#" className="sidebar-menu">
                <span className="sidebar-menu-icon">
                  <FaCity />
                </span>
                <span className="sidebar-menu-text">Ville</span>
              </a>
            </li>
          </ul>
        </aside>
        <div className="wrapper">
          <div className="header">
            <div className="container-fluid flex items-center justify-between">
              <div className="flex items-center space-x-6">



              </div>

              <div className="flex items-center">
                <AuthState />
              </div>
            </div>
          </div>
          <div className="content">

            <main className="container flex-grow p-2 sm:p-4">

              <Route
                {...rest}
                render={(props: any) =>
                  isAuth ? <Component {...props} /> : <Redirect to="/login" />
                }
              />
            </main>

          </div>
          <footer className="footer">
            <p className="text-sm">
              Copyright © 2022
              <a className="text-primary-500 hover:underline" href="#" target="_blank">I-Varotra</a>,
              All right Reserved
            </p>

            <p className="flex items-center gap-1 text-sm">
              I-Varotra &amp; Made with <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart text-danger-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default AdminRoute;
