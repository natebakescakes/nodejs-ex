const server = require('./app');
const request = require('supertest');

test('GET to / should return 200', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((req, res) => {
      expect(res.text).toEqual('Hello, world');
    });
});
