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
  listStyleType: 'none'
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
  ListProp = {},
  reduceRenderedChildren = false
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
            {React.Children.map(children, (child, index) => (
              <li
                style={{
                  ...ListStyle,
                  width: `${width / slidesToShow}px`,
                  ...ListStyleProp
                }}
                {...ListProp}
              >
                {(() => {
                  if (reduceRenderedChildren) {
                    if (index === currentIndex) {
                      return child;
                    }

                    if (
                      index >= currentIndex - slidesToShow &&
                      index <= currentIndex + slidesToShow
                    ) {
                      return child;
                    }

                    return null;
                  } else {
                    return child;
                  }
                })()}
              </li>
            ))}
          </ul>
        );
      }}
    </ResizeObserverContainer>
  );
};

export default memo(ReactSliderCarousel);
