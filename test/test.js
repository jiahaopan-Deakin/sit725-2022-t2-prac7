var expect  = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function() {
        var url = "http://localhost:3000/addNumbers/3/5";
        it("returns status 200 to check if api works", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("request returns status 200 within the message body", function(done) {
            request(url, function(error, response, body){
                body = JSON.parse(body);
                expect(body.statusCode).to.equal(200);
                done();
            });
        });

    });