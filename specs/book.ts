let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../dist/server');
let should = chai.should();
let expect = chai.expect;


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
  /*
  * Test the / route
  */
  describe('/ ', () => {
      it('it should GET intro message', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  expect(res.body.message).to.equal('Welcome to our Bookstore!');
              done();
            });
      });
  });

  after( function(done) {
    server.close();
    done();
  });

});
