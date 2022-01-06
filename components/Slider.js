import styled from 'styled-components';

const SliderStyles = styled.div`
  .slider {
    position: relative;
    margin: 0 auto;
    height: 120px;
    &__btns {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 35px;
      left: 50%;
      transform: translateX(-50%);
      button + button {
        margin-left: 60px;
      }
    }
  }
  .slide {
    position: absolute;
    width: 100%;
  }

  button {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--blacktxt);
    font-size: 14px;
    letter-spacing: 7px;
    font-family: var(--bold);
    position: relative;
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
    &::hover {
      cursor: pointer;
    }
    &::hover::after {
      width: 100%;
      left: 0;
      background: var(--blacktxt);
    }
  }
`;

export default function Slider() {
  return (
    <SliderStyles>
      <div className="slider">
        <div className="slide slide--1">
          <div className="servicios__services">
            <h3 className="servicios__services_tittle">Web Design.</h3>
          </div>
        </div>
        {/* <div className="slide slide--2">
          <div className="servicios__services">
            <h3 className="servicios__services_tittle">Web Development.</h3>
          </div>
        </div>
        <div className="slide slide--3">
          <div className="servicios__services">
            <h3 className="servicios__services_tittle">User Experience.</h3>
          </div>
        </div>
        <div className="slide slide--4">
          <div className="servicios__services">
            <h3 className="servicios__services_tittle">SEO.</h3>
          </div>
        </div>
        <div className="slide slide--5">
          <div className="servicios__services">
            <h3 className="servicios__services_tittle">E-Commerce.</h3>
          </div>
        </div> */}
        <div className="slider__btns">
          <button>PREV</button>
          <button>NEXT</button>
        </div>
      </div>
    </SliderStyles>
  );
}
