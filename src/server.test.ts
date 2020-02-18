import supertest from 'supertest';
import app from './server';

describe('app', () => {

  it('should return a successful response for GET /', (done) => {
    const request = supertest(app);

    request.get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello world!');
        done();
      });

  });
});
