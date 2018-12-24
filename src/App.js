import React, { useState } from 'react';
import Post from './components/Post';
import ReactSliderCarousel from './react-slider-carousel/ReactSliderCarousel';
import times from 'lodash/times';
import { Global } from '@emotion/core';
import css from '@emotion/css/macro';

const totalLength = 12;

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
          /* * {
            box-sizing: border-box;
          } */
        `}
      />
      <button onClick={handeNext}>Next</button>
      <button onClick={handePrev}>Prev</button>

      <ReactSliderCarousel currentIndex={currentIndex}>
        {times(totalLength, index => (
          <Post key={index} />
        ))}
      </ReactSliderCarousel>
    </>
  );
};

export default App;
