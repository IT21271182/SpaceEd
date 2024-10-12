// jest.config.js

module.exports = {
  testEnvironment: "jsdom",
  
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // For handling CSS imports
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

