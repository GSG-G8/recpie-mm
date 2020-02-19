/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

test('test 404 error', (done) => {
  request(app)
    .get('/hello404')
    // .send()
    .expect(404)
    .end((err) => {
      if (err) done(err);
      // expect(res.text).toBe();
      done();
    });
});

test('test /food end point', (done) => {
  request(app)
    .get('/food')
    .send('pasta')
    .expect(200)
    .end((err) => {
      if (err) done(err, res);
      expect(res.text).toEqual();
      done();
    });
});
