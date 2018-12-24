import React, { memo } from 'react';
import ResizeObserverContainer from './ResizeObserverContainer';

const ContainerStyle = {
  width: '100%',
  overflow: 'hidden',
  border: '1px solid black'
};
const TrackStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0',
  margin: '0',
  transition: 'transform 0.5s ease'
};

const LiStyle = {
  listStyleType: 'none',
  flexGrow: 1
};

const ReactSliderCarousel = ({ children, currentIndex }) => {
  const totalChildren = React.Children.count(children);

  return (
    <ResizeObserverContainer style={ContainerStyle}>
      {({ width, height }) => {
        return (
          <ul
            style={{
              ...TrackStyle,
              width: `${totalChildren * width}px`,
              transform: `translateX(${-(
                currentIndex *
                (100 / totalChildren)
              )}%)`
            }}
          >
            {React.Children.map(children, child => (
              <li style={LiStyle}>{child}</li>
            ))}
          </ul>
        );
      }}
    </ResizeObserverContainer>
  );
};

export default memo(ReactSliderCarousel);
