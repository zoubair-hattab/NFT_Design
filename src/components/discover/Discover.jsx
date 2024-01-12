import React from 'react';
import './dicover.css';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <section className="section discover" aria-labelledby="discover-label">
      <div className="container">
        <h2
          className="headline-md section-title text-center"
          id="discover-label"
        >
          Discover Items
        </h2>

        <ul className="grid-list">
          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-8.gif"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Genuine Undead #3902"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-8.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="StreetBoy profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @StreetBoy
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Genuine Undead #3902
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-7.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Windchime #768"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>

                <div className="countdown">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <span className="span">5d 04h 18m 04s</span>
                </div>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-7.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="CutieGirl profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @CutieGirl
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Windchime #768
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-6.gif"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Probably A Label #3277"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-6.gif"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="ButterFly profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @ButterFly
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Probably A Label #3277
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-5.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Probably A Label #1711"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-5.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="NorseQueen profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @NorseQueen
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Probably A Label #1711
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-4.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Shibuya Scramble Punks"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-4.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="BigBull profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @BigBull
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Shibuya Scramble Punks
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-3.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Probably A Label #650"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-3.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="Angel profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @Angel
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Probably A Label #650
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-2.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Looki #0147"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>

                <div className="countdown">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <span className="span">10d 23h 24m 10s</span>
                </div>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-2.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="CrazyAnyone profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @CrazyAnyone
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Looki #0147
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="discover-card card">
              <div
                className="card-banner img-holder"
                style={{ '--width': 500, '--height': 500 }}
              >
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/showcase-1.jpg"
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="Poob #285"
                  className="img-cover"
                />

                <button className="btn btn-primary">
                  <ion-icon name="flash" aria-hidden="true"></ion-icon>

                  <span className="span">Place Bid</span>
                </button>
              </div>

              <div className="card-profile">
                <img
                  src="https://codewithsadee.github.io/metalink/assets/images/avatar-1.jpg"
                  width="32"
                  height="32"
                  loading="lazy"
                  alt="Princess profile"
                  className="img"
                />

                <Link to="#" className="link:hover">
                  @Princess
                </Link>
              </div>

              <h3 className="title-sm card-title">
                <Link to="#" className="link:hover">
                  Poob #285
                </Link>
              </h3>

              <div className="card-meta">
                <div>
                  <p>Price</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.5 ETH</span>
                  </div>
                </div>

                <div>
                  <p>Highest Bid</p>

                  <div className="card-price">
                    <img
                      src="https://codewithsadee.github.io/metalink/assets/images/ethereum.svg"
                      width="16"
                      height="24"
                      loading="lazy"
                      alt="ethereum icon"
                    />

                    <span className="span">3.55 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <Link to="#" className="btn-link link:hover">
          <span className="span">Explore More</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </Link>
      </div>
    </section>
  );
};

export default Discover;
