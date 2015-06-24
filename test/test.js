var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {

  it('respond with hola-radiola', function(done) {
    request(app).get('/').expect('hola-radiola', done);
  });

  it('respond with hola-radiola', function(done) {
    request(app).get('/').expect('hola-radiola-falla', done);
  });

  // it('forzar un fallo', function(done) {
  //   done(new Error('JJJ Error forzado'));
  // })

});