var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {

  it('respond with hola-radiola', function(done) {
    request(app).get('/').expect('hola-radiola', done);
  });

  it('forzar una pausa', function(done) {
    this.timeout(5000);
    setTimeout(done, 4000);
  });

  // it('forzar un fallo', function(done) {
  //   done(new Error('JJJ Error forzado'));
  // });

});