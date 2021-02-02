import { server } from '../src';
import 'mocha';

import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hello API Request', () => {
  it('should return response on call', () => {
    return chai.request(server)
    .get('/')
    .then(res => {
      chai.expect(res.body.message).to.eql("Welcome to our Bookstore!");
    });
  })

  after( function(done) {
    server.close();
    done();
  });
})
