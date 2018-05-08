const clubMember = require('../src/json');

describe('JSON edit', () => {
  test('city param should exist on the json object', () => {
    expect(clubMember.city).not.toBe(undefined);
  });
});
