import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import playstore from '../../assets/images/playstore.png';
import appstore from '../../assets/images/appstore.png';
import { MdOutlineChevronRight } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="section footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link to="#">
              <img
                src="https://codewithsadee.github.io/metalink/assets/images/logo.svg"
                width="126"
                height="28"
                loading="lazy"
                alt="Metalink home"
              />
            </Link>

            <p className="body-md footer-text">
              Buy, sell and discover exclusive digital assets by the top artists
              of NFTs world.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="title-lg footer-list-title">Metalink</p>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Explore Item</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Live Auction</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Activities</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Wallets</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Creators</span>
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="title-lg footer-list-title">Useful Links</p>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">About Us</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Blog & News</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Terms & Condition</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Privacy policy</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Login</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="footer-link">
                <MdOutlineChevronRight />

                <span className="span">Contact Us</span>
              </Link>
            </li>
          </ul>

          <div className="footer-list">
            <ul>
              <li>
                <p className="title-lg footer-list-title">
                  Download the Metalink app
                </p>
              </li>

              <li className="footer-list-item">
                <Link to="#">
                  <img
                    src={appstore}
                    width="134"
                    height="40"
                    loading="lazy"
                    alt="Download Metalink app from AppStore"
                  />
                </Link>

                <Link to="#">
                  <img
                    src={playstore}
                    width="134"
                    height="40"
                    loading="lazy"
                    alt="Download Metalink app from PlayStore"
                  />
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <p className="title-lg footer-list-title">Contact Details</p>
              </li>

              <li className="footer-list-item">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <Link to="#" className="footer-link">
                  metalink@nft.com
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                <Link to="#" className="footer-link">
                  +111 234-567-891
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="body-md text-center copyright">
            &copy; 2024 Metalink. Developed with
            <span className="span">Zoubair Hattab.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
