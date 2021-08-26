module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    "no-multiple-empty-lines": [2, { max: 1 }],
    'global-require': 0,
    'jsx-props-no-spreading': 0,
  },
};
