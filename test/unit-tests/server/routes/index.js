const assert = require('assert');
const request = require('request');

describe('Routes index', function() {
    
    it('The index route should return a 200 response', function() {
        request.get('http://localhost:3000', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The blank route should return a 200 response', function() {
        request.get('http://localhost:3000/blank', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The buttons route should return a 200 response', function() {
        request.get('http://localhost:3000/buttons', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The flot route should return a 200 response', function() {
        request.get('http://localhost:3000/flot', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The forms route should return a 200 response', function() {
        request.get('http://localhost:3000/forms', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The grid route should return a 200 response', function() {
        request.get('http://localhost:3000/grid', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The icons route should return a 200 response', function() {
        request.get('http://localhost:3000/icons', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The morris route should return a 200 response', function() {
        request.get('http://localhost:3000/morris', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The notifications route should return a 200 response', function() {
        request.get('http://localhost:3000/notifications', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The panels-wells route should return a 200 response', function() {
        request.get('http://localhost:3000/panels-wells', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The tables route should return a 200 response', function() {
        request.get('http://localhost:3000/tables', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });

    it('The typography route should return a 200 response', function() {
        request.get('http://localhost:3000/typography', function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  
});