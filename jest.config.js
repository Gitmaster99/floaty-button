module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  coverageReporters: ['html','json-summary','text-summary'],
  coverageDirectory: 'tests/coverage',
  coveragePathIgnorePatterns: ["/node_modules/"],
};
