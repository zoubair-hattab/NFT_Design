import React, { useState } from 'react';
import './ask.css';
import { IoChevronDown } from 'react-icons/io5';
const Ask = () => {
  const [accordions, setAccordions] = useState({
    active: false,
    id: 0,
  });
  const toggle = (id) => {
    if (id > 0 && accordions.active === false) {
      setAccordions({ active: true, id: id });
    } else if (id !== accordions.id && accordions.active === true) {
      setAccordions({ active: true, id: id });
    } else {
      setAccordions({ active: !accordions.active, id: id });
    }
  };
  console.log(accordions);
  return (
    <section className="section qna" aria-label="question and answer">
      <div className="container">
        <h2 className="headline-md section-title text-center">Q&A</h2>

        <p className="section-text body-md text-center">
          We are a huge marketplace dedicated to connecting great artists of all
          Metalink with their fans and unique token collectors!
        </p>

        <ul className="qna-list">
          <li className="qna-item">
            <div
              className={`qna-card ${
                accordions?.active === true && accordions?.id === 1 && 'active'
              }`}
              data-accordion
            >
              <button
                className="qna-btn"
                data-accordion-btn
                onClick={() => {
                  toggle(1);
                }}
              >
                <h3 className="title-sm">How does it work ?</h3>

                <IoChevronDown
                  name="chevron-down"
                  aria-hidden="true"
                  size={15}
                  color="white"
                ></IoChevronDown>
              </button>

              <div className={`qna-content `}>
                <p className="body-md">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </li>

          <li className="qna-item">
            <div
              className={`qna-card ${
                accordions?.active === true && accordions?.id === 2 && 'active'
              }`}
              data-accordion
            >
              <button
                className="qna-btn"
                data-accordion-btn
                onClick={() => {
                  toggle(2);
                }}
              >
                <h3 className="title-sm">
                  Do I need a designer to use Metalink ?
                </h3>

                <IoChevronDown
                  name="chevron-down"
                  aria-hidden="true"
                  size={15}
                  color="white"
                ></IoChevronDown>
              </button>

              <div className="qna-content">
                <p className="body-md">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </li>

          <li className="qna-item">
            <div
              className={`qna-card ${
                accordions?.active === true && accordions?.id === 3 && 'active'
              }`}
              data-accordion
            >
              <button
                className="qna-btn"
                data-accordion-btn
                onClick={() => {
                  toggle(3);
                }}
              >
                <h3 className="title-sm">
                  What do I need to do to start selling ?
                </h3>

                <IoChevronDown
                  name="chevron-down"
                  aria-hidden="true"
                  size={15}
                  color="white"
                ></IoChevronDown>
              </button>

              <div className="qna-content">
                <p className="body-md">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </li>

          <li className="qna-item">
            <div
              className={`qna-card ${
                accordions?.active === true && accordions?.id === 4 && 'active'
              }`}
              data-accordion
            >
              <button
                className="qna-btn"
                data-accordion-btn
                onClick={() => {
                  toggle(4);
                }}
              >
                <h3 className="title-sm">
                  What happens when I receive an order ?
                </h3>

                <IoChevronDown
                  name="chevron-down"
                  aria-hidden="true"
                  size={15}
                  color="white"
                ></IoChevronDown>
              </button>

              <div className="qna-content">
                <p className="body-md">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ask;
