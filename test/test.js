var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {

  it('respond with hello world', function(done) {
    request(app).get('/').expect('hola radiola', done);
  });

  it('forzar un fallo', function(done) {
    done(new Error('JJJ Error forzado'));
  })

});