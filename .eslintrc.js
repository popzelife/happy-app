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
    'global-require': 0,
    'jsx-props-no-spreading': 0,
  },
};
