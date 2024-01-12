import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar-1.jpg';
import './bestSeller.css';
const BestSeller = () => {
  return (
    <section className="section sellers" aria-labelledby="sellers-label">
      <div className="container">
        <h2
          className="headline-md section-title text-center"
          id="sellers-label"
        >
          Best Creators & Sellers
        </h2>

        <ul className="grid-list">
          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Steven Townsend profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Steven Townsend
                  </Link>
                </h3>

                <p className="user-name label-md">@StreetBoy</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Steven Townsend"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Tiffany Betancourt profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Tiffany Betancourt
                  </Link>
                </h3>

                <p className="user-name label-md">@CutieGirl</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Tiffany Betancourt"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Jacqueline Burns profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Jacqueline Burns
                  </Link>
                </h3>

                <p className="user-name label-md">@ButterFly</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Jacqueline Burns"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Mari Harrington profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Mari Harrington
                  </Link>
                </h3>

                <p className="user-name label-md">@NorseQueen</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Mari Harrington"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Floyd Glasgow profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Floyd Glasgow
                  </Link>
                </h3>

                <p className="user-name label-md">@BigBull</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Floyd Glasgow"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Donna Schultz profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Donna Schultz
                  </Link>
                </h3>

                <p className="user-name label-md">@Angel</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Donna Schultz"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Joshua Morris profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Joshua Morris
                  </Link>
                </h3>

                <p className="user-name label-md">@CrazyAnyone</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Joshua Morris"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Rosaria Vargas profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Rosaria Vargas
                  </Link>
                </h3>

                <p className="user-name label-md">@Princess</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Rosaria Vargas"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>

          <li>
            <div className="seller-card card">
              <figure className="card-banner">
                <img
                  src={avatar}
                  width="64"
                  height="64"
                  loading="lazy"
                  alt="Carl Williams profile"
                />

                <ion-icon name="checkmark-circle"></ion-icon>
              </figure>

              <div className="card-title-wrapper">
                <h3 className="title-sm">
                  <Link to="#" className="link:hover">
                    Carl Williams
                  </Link>
                </h3>

                <p className="user-name label-md">@LooserBad</p>
              </div>

              <button
                className="btn-icon outline"
                aria-label="Hire Carl Williams"
              >
                <ion-icon
                  name="person-add-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BestSeller;
