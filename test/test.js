const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const url = 'http://localhost:3333';
const requester = chai.request.agent(url);
describe('Testing todo API', () => {
  it('should read the totdoList.txt file sucessfully', (done) => {
    requester
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('Soccer');
        done();
      });
  });

  const todo = {data: 'Post a todo item at ' + new Date()};
  it('should add new todo item the totdoList.txt file sucessfully', (done) => {
    requester
      .post('/')
      .send(todo)
      .end(function (err, res) {
        expect(res).to.have.status(201);
        done();
      });
  });

});