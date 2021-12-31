import styled from 'styled-components';

const SliderStyles = styled.div`
  .slider {
    position: relative;
    margin: 0 auto;
  }
  .slide {
    position: absolute;
    width: 100%;
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
        <div className="slide slide--2">
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
        </div>
        <div className="servicios__btns"></div>
      </div>
    </SliderStyles>
  );
}
