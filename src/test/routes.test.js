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
      done();
    });
});

test('test /food end point', (done) => {
  request(app)
    .get('/food')
    .expect(200)
    .end((err) => {
      if (err);
      done();
    });
});

test('test post route', (done) => {
  request(app)
    .post('/foo')
    .send({ search: 'fish' })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err) => {
      if (err) done(err);
      done();
    });
});
