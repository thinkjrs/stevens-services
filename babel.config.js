module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          loose: true,
          modules: 'auto',
        },
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
  ],
  plugins: [],
};
