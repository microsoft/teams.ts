import supertest from 'supertest';

import { App } from './app';

describe('App', () => {
  let app: App;

  beforeAll(async () => {
    app = new App();
    await app.start(9000);
  });

  afterAll(async () => {
    await app.stop();
  });

  it('should get manifest', (done) => {
    supertest(app.http.server).get('/').expect(200, done);
  });
});
