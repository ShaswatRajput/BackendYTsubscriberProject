const chai = require("chai");
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

//-----------------test for getting all users -----------------------
describe("fetching all users", () => {
  it("gets all users", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.body.should.be.a("array");
          res.should.have.status(200);
        }
        done();
      });
  });
});

// --------- test for user data with name and subscribed channel field----------
describe("users with filter", () => {
  it("should go to users name page", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers/names")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.body.should.be.a("array");
          res.should.have.status(200);
        }
        done();
      });
  });
});

// -------- test for fetching user by id --------------------
describe("gets user by id", () => {
  it("should go to specific user page", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/subscribers/64b26c7447f97f43c4054231")
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
        
          res.body.should.be.a("object");
          res.should.have.status(200);
        }
        done();
      });
  });
});
