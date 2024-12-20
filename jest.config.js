module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/**/*.spec.[jt]s?(x)',
    '**/tests/**/*.test.[jt]s?(x)'
  ],
  transformIgnorePatterns: ['/node_modules/(?!element-plus)'],
  setupFiles: ['<rootDir>/tests/setup.js']
}
