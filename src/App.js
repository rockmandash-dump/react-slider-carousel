import React, { useState } from 'react';
import styled from '@emotion/styled';
import ReactSliderCarousel from './react-slider-carousel/ReactSliderCarousel';
import times from 'lodash/times';
import { Global } from '@emotion/core';
import css from '@emotion/css/macro';

const Container = styled.img`
  display: block;
  width: 100%;
`;

const totalLength = 10;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handeNext = () => {
    setCurrentIndex((currentIndex + 1) % totalLength);
  };
  const handePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalLength) % totalLength);
  };

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <button onClick={handeNext}>Next</button>
      <button onClick={handePrev}>Prev</button>

      <ReactSliderCarousel
        currentIndex={currentIndex}
        slidesToShow={1}
        reduceRenderedChildren={true}
      >
        {times(totalLength, index => (
          <Container
            key={index}
            src="https://source.unsplash.com/user/erondu/500x500"
          />
        ))}
      </ReactSliderCarousel>
    </>
  );
};

export default App;
