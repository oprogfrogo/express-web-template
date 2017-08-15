const assert = require('assert');
const server = require('../../../../server/index');
const request = require('request');

describe('Routes users', function() {
        
    it('The index route should return a 200 response', function() {

        const options = {
            url: 'http://localhost:3000/users',
            method: 'POST',
            postData: {
                mimeType: 'application/x-www-form-urlencoded',
                "first_name": "Abrahan"
            }
        };

        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            expect(body.first_name).to.equal('Abrahan');
            done();
        });
    });
        
});