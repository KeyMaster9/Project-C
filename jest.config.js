/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  "moduleNameMapper": {
    "^#containers(.*)$": "<rootDir>/src/containers$1",
    "^#components(.*)$": "<rootDir>/src/components$1",
    "^#helpers(.*)$": "<rootDir>/src/helpers$1",
    "^#config(.*)$": "<rootDir>/src/config$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  } 
};
