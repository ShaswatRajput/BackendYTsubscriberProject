const server = require("../src/app");
const chaiHttp = require("chai-http");
const chai = require("chai");
chai.use(chaiHttp);
chai.should();




// ----------------test for the landing page-------------
describe("test for the landing page", () => {
  it("checking the res status code", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });
});