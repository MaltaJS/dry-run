module.exports = {
  name: 'feature-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
