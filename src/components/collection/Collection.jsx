import React, { useEffect, useLayoutEffect, useState } from 'react';
import './collection.css';
import { IoIosArrowRoundForward, IoIosCheckmarkCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import showCase1 from '../../assets/images/showcase-1.jpg';
import avatar1 from '../../assets/images/avatar-1.jpg';
import showCase2 from '../../assets/images/showcase-2.jpg';
import avatar2 from '../../assets/images/avatar-2.jpg';
import showCase3 from '../../assets/images/showcase-3.jpg';
import avatar3 from '../../assets/images/avatar-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import showCase4 from '../../assets/images/showcase-4.jpg';
import avatar4 from '../../assets/images/avatar-4.jpg';
import showCase5 from '../../assets/images/showcase-5.jpg';
import avatar5 from '../../assets/images/avatar-5.jpg';

import showCase6 from '../../assets/images/showcase-7.jpg';
import avatar6 from '../../assets/images/avatar-7.jpg';
const Collection = () => {
  const [number, setNumber] = useState(0);
  const [view, setView] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setNumber(window.innerWidth);
    };
    window.addEventListener('resize', updateSize);

    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const sliders = document.querySelectorAll('[data-slider]');

    const totalSliderVisibleItems = Number(
      getComputedStyle(sliders[0]).getPropertyValue('--slider-item')
    );
    setView(totalSliderVisibleItems);
  }, [number]);
  return (
    <section
      className="section top-collection"
      aria-labelledby="collection-label"
    >
      <div className="container">
        <div className="title-wrapper">
          <h2
            className="headline-md section-title text-center"
            id="collection-label"
          >
            Top Collections
          </h2>

          <Link to="#" className="btn-link link:hover">
            <span className="span">See More</span>
            <IoIosArrowRoundForward size={20} />
          </Link>
        </div>

        <div className="slider" data-slider>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={view && view}
            navigation
            autoplay={true}
          >
            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase1}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Digital Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar1}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="CutieGirl profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      Digital Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by{' '}
                    <Link to="#" className="link">
                      @CutieGirl
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase2}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="GIF Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar2}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="ButterFly profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      GIF Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by{' '}
                    <Link to="#" className="link">
                      @ButterFly
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase3}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Sports Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar3}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="NorseQueen profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      Sports Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by{' '}
                    <Link to="#" className="link">
                      @NorseQueen
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase4}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Photography Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar4}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="BigBull profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      Photography Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by{' '}
                    <Link to="#" className="link">
                      @BigBull
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase5}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Illustrations Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar5}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Angel profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      Illustrations Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by
                    <Link to="#" className="link">
                      @Angel
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="collection-card card">
                <figure
                  className="card-banner img-holder"
                  style={{ '--width': 500, '--height': 500 }}
                >
                  <img
                    src={showCase6}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Animations Collection"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-profile">
                    <img
                      src={avatar6}
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="CrazyAnyone profile"
                    />

                    <IoIosCheckmarkCircle
                      name="checkmark-circle"
                      className="check"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="title-md card-title">
                    <Link to="#" className="link:hover">
                      Animations Collection
                    </Link>
                  </h3>

                  <p className="label-md card-author">
                    by{' '}
                    <Link to="#" className="link">
                      @CrazyAnyone
                    </Link>
                  </p>

                  <p className="card-text">25 Items</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            className="slider-btn prev"
            aria-label="Slide to previous item"
            data-slider-prev
          >
            <ion-icon name="chevron-back-sharp" aria-hidden="true"></ion-icon>
          </button>

          <button
            className="slider-btn next"
            aria-label="Slide to next item"
            data-slider-next
          >
            <ion-icon
              name="chevron-forward-sharp"
              aria-hidden="true"
            ></ion-icon>
          </button>
        </div>

        <Link to="#" className="btn-link link:hover">
          <span className="span">See More</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </Link>
      </div>
    </section>
  );
};

export default Collection;
