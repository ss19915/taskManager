module.exports = {
    'verbose': true,
    'transform': {
        '^.+\\.jsx?$': './test/babel-jest'
      },
      setupFiles: [ './test/setup.js' ],
      testPathIgnorePatterns: [ 'node_modules' ],
      snapshotSerializers: ["enzyme-to-json/serializer"],
}