module.exports = {
  env: {
    es2021: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
    ecmaVersion: 2022,
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": "warn",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-console": 0,
  },
};
