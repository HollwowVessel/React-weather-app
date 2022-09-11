module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  ignorePatterns: ['node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['containers', './containers'],
          ['pages', './pages'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
    'react/prop-types': 0,
    'linebreak-style': 0,
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],

    'no-plusplus': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'array-callback-return': 0,
    'react/prefer-stateless-function': 0,
    'no-eval': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
