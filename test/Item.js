
let Item = require("../models/Item");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Items", () => {
  beforeEach((done) => {
    Item.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET item", () => {
    it("it should GET all the items", (done) => {
      chai
        .request(app)
        .get("/api/items")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST item", () => {
    it("it should new POST a item", (done) => {
      let item = {
        title: "This is the first item",
        body: "This is a item post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/items")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id item", () => {
    it("it should GET a item by the id", (done) => {
      let item = new Item({
        title: "This is the first item",
        body: "This is a item post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      item.save((err, item) => {
        chai
          .request(app)
          .get("/api/items/" + item.id)
          .send(item)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id item", () => {
    it("it should UPDATE a item given the id", (done) => {
      let item = new Item({
        title: "This is the first item",
        body: "This is a item post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      item.save((err, item) => {
        console.log(item.id);
        chai
          .request(app)
          .put("/api/items/" + item.id)
          .send({
            title: "The first item was updated",
            body: "This is a item post",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id item", () => {
    it("it should DELETE a item given the id", (done) => {
      let item = new Item({
        title: "This is the first item",
        body: "This is a item post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      item.save((err, item) => {
        chai
          .request(app)
          .delete("/api/items/" + item.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
