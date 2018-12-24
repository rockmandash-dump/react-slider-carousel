import babel from 'rollup-plugin-babel';

export default {
  input: `${__dirname}/src/react-slider-carousel/ReactSliderCarousel.js`,
  output: {
    file: `${__dirname}/lib/index.js`,
    format: 'esm'
  },
  plugins: [
    babel({
      presets: [
        [
          '@babel/preset-react',
          {
            useBuiltIns: true
          }
        ]
      ]
    })
  ],
  external: ['react', 'react-dom', 'resize-observer-polyfill']
};
