import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import wallet from '../../assets/images/profile.jpg';
import { CiWallet } from 'react-icons/ci';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import './navBar.css';
const NavBar = () => {
  const [activeNavBar, setActiveNavBar] = useState();

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="#">
          <Logo className="logo" />
        </Link>
        <nav className={`navbar ${activeNavBar && 'active'}`} data-navbar>
          <ul className="navbar-list">
            <li onClick={() => setActiveNavBar(false)}>
              <Link to="#" className="navbar-link label-lg link:hover">
                Home
              </Link>
            </li>
            <li onClick={() => setActiveNavBar(false)}>
              <Link to="#" className="navbar-link label-lg link:hover">
                Explore
              </Link>
            </li>
            <li onClick={() => setActiveNavBar(false)}>
              <Link to="#" className="navbar-link label-lg link:hover">
                Wallet
              </Link>
            </li>
            <li onClick={() => setActiveNavBar(false)}>
              <Link to="#" className="navbar-link label-lg link:hover">
                About Us
              </Link>
            </li>
            <li onClick={() => setActiveNavBar(false)}>
              <Link to="#" className="navbar-link label-lg link:hover">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <button className="btn-icon primary" aria-label="wallet">
            <CiWallet color="white" size={30}></CiWallet>
          </button>

          <button
            className="btn-icon profil-btn"
            aria-label="Metalink account: Fiona doe"
          >
            <img
              src={wallet}
              width="50"
              height="50"
              alt="Fiona doe"
              className="img-cover"
            />
          </button>
          <button
            className={`nav-toggle-btn ${activeNavBar && 'active'}`}
            aria-label="menu toggle"
            data-nav-toggler
            onClick={() => setActiveNavBar(!activeNavBar)}
          >
            <BiMenuAltRight
              className="default-icon"
              color="white"
              size={30}
            ></BiMenuAltRight>
            <IoMdClose
              color="white"
              size={30}
              className="active-icon"
            ></IoMdClose>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
