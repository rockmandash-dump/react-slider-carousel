import React, { memo, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const ResizeObserverContainer = ({ children, ...rest }) => {
  const ContainerRef = useRef(null);
  const [contentRect, setContentRect] = useState(null);

  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      setContentRect(entries[0].contentRect);
    });

    ro.observe(ContainerRef.current);

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={ContainerRef} {...rest}>
      {contentRect && children(contentRect)}
    </div>
  );
};

export default memo(ResizeObserverContainer);
