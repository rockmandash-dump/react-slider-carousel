import React, { memo } from 'react';
import ResizeObserverContainer from './ResizeObserverContainer';

const ContainerStyle = {
  width: '100%',
  overflow: 'hidden'
};
const TrackStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  padding: '0',
  margin: '0',
  transition: 'transform 0.5s ease'
};

const ListStyle = {
  listStyleType: 'none',
  flexGrow: 1
};

const ReactSliderCarousel = ({
  children,
  currentIndex,
  slidesToShow = 1,
  ContainerStyleProp = {},
  TrackStyleProp = {},
  ListStyleProp = {},
  ContainerProp = {},
  TrackProp = {},
  ListProp = {}
}) => {
  const totalChildren = React.Children.count(children);

  return (
    <ResizeObserverContainer
      style={{ ...ContainerStyle, ...ContainerStyleProp }}
      {...ContainerProp}
    >
      {({ width }) => {
        const TrackWidth = `${(totalChildren * width) / slidesToShow}px`;
        const percentagePerChild = 100 / totalChildren;

        let TrackTransformPercentage;

        if (currentIndex < 0) {
          TrackTransformPercentage = 0;
        } else if (currentIndex > totalChildren - slidesToShow) {
          TrackTransformPercentage = -(
            (totalChildren - slidesToShow) *
            percentagePerChild
          );
        } else {
          TrackTransformPercentage = -(currentIndex * percentagePerChild);
        }

        const TrackTransform = `translateX(${TrackTransformPercentage}%)`;

        return (
          <ul
            style={{
              ...TrackStyle,
              width: TrackWidth,
              transform: TrackTransform,
              ...TrackStyleProp
            }}
            {...TrackProp}
          >
            {React.Children.map(children, child => (
              <li style={{ ...ListStyle, ...ListStyleProp }} {...ListProp}>
                {child}
              </li>
            ))}
          </ul>
        );
      }}
    </ResizeObserverContainer>
  );
};

export default memo(ReactSliderCarousel);
