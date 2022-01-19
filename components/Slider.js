import styled from 'styled-components';
import { useState } from 'react';
import services from '../lib/services';
import { device } from '../lib/breakpoints';

const SliderStyles = styled.div`
  .slider {
    position: relative;
    margin: 0 auto;
    height: 220px;
    overflow: hidden;
    &__btns {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      button + button {
        margin-left: 60px;
      }
    }
    @media ${device.tablet} {
      &__btns {
        bottom: 35px;
      }
    }
    @media ${device.laptop} {
      &__btns {
        text-align: left;
        bottom: 10px;
      }
    }
  }
  .slide {
    position: absolute;
    width: 100%;
    top: 0;
    transition: transform 1s;
  }

  button {
    z-index: 500;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--alwaysblack);
    font-size: 14px;
    letter-spacing: 7px;
    font-family: var(--bold);
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 130%;
      left: calc(50% - 15px);
      width: 30px;
      height: 2px;
      background: var(--greytxt);
      transition: all ease 0.2s;
    }
    &:hover::after,
    &:active::after {
      width: 100%;
      left: 0;
      background: var(--blacktxt);
    }
  }
`;

export default function Slider() {
  const [currSlide, updateSlide] = useState(0);
  const prevSlide = () => {
    if (currSlide === 0) {
      updateSlide(3);
      return;
    }
    updateSlide(currSlide - 1);
  };
  const nextSlide = () => {
    if (currSlide === 3) {
      updateSlide(0);
      return;
    }
    updateSlide(currSlide + 1);
  };
  return (
    <SliderStyles>
      <div className="slider">
        {Object.keys(services).map((service, idx) => (
          <div
            className={`slide slide--${idx + 1}`}
            key={service}
            style={{ transform: `translateX(${100 * (idx - currSlide)}%)` }}
          >
            <div className="servicios__services">
              <h3 className="servicios__services_tittle">
                {services[service].title}
              </h3>
              <p className="servicios__services_description">
                {services[service].content}
              </p>
            </div>
          </div>
        ))}
        <div className="slider__btns">
          <button onClick={prevSlide}>PREV</button>
          <button onClick={nextSlide}>NEXT</button>
        </div>
      </div>
    </SliderStyles>
  );
}
