module.exports = {
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
  transform: {
    "^.+\\.(ts|js)?$": ["@swc/jest"],
  },
  transformIgnorePatterns: [`./node_modules`],
  moduleFileExtensions: ['ts', 'js', 'html'],
};
