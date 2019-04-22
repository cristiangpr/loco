const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/messages/";
const sequelize = require("../../src/db/models/index").sequelize;
 const Message = require("../../src/db/models").Message;

describe("routes : messages", () => {
  beforeEach((done) => {
     this.message;
     sequelize.sync({force: true}).then((res) => {

      Message.create({
        name: "John",
        content: "There is a lot of them",
        email: "dadada@dada.com",
        phone: "1234567890"
      })
       .then((message) => {
         this.message = message;
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });

     });

   });

  describe("GET /messages", () => {

    it("should return a status code 200 and all messages", (done) => {

//#3
       request.get(base, (err, res, body) => {
         expect(res.statusCode).toBe(200);
         expect(err).toBeNull();
         expect(body).toContain("John");

         done();
       });
     });

     describe("GET /messages/new", () => {

  it("should render a new message form", (done) => {
    request.get(`${base}new`, (err, res, body) => {
      expect(err).toBeNull();
      expect(body).toContain("Contact Us");
      done();
    });
  });

});
   });

   describe("POST /messages/create", () => {
     const options = {
       url: `${base}create`,
       form: {
         name: "Jack Freestone",
         content: "I wanna cropdoc",
         email: "jack@freestone.com",
         phone: "1234567890"
       }
     };

     it("should create a new message and redirect", (done) => {

//#1
       request.post(options,

//#2
         (err, res, body) => {
           Message.findOne({where: {name: "Jack Freestone"}})
           .then((message) => {
             expect(res.statusCode).toBe(303);
             expect(message.email).toBe("jack@freestone.com");
             expect(message.content).toBe("I wanna cropdoc");
             done();
           })
           .catch((err) => {
             console.log(err);
             done();
           });
         }
       );
     });
   });

   describe("GET /messages/:id", () => {

   it("should render a view with the selected message", (done) => {

      request.get(`${base}${this.message.id}`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("There is a lot of them");
       done();
     });
   });

 });

 describe("POST /messages/:id/destroy", () => {

   it("should delete the message with the associated ID", (done) => {

//#1
     Message.findAll()
     .then((messages) => {

//#2
       const messageCountBeforeDelete = messages.length;

       expect(messageCountBeforeDelete).toBe(1);

//#3
       request.post(`${base}${this.message.id}/destroy`, (err, res, body) => {
         Message.findAll()
         .then((messages) => {
           expect(err).toBeNull();
           expect(messages.length).toBe(messageCountBeforeDelete - 1);
           done();
         })

       });
     });

   });

 });

 describe("GET /messages/:id/edit", () => {

   it("should render a view with an edit message form", (done) => {
     request.get(`${base}${this.message.id}/edit`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("Edit Message");
       expect(body).toContain("John");
       done();
     });
   });

 });
 describe("POST /messages/:id/update", () => {

     it("should update the message with the given values", (done) => {
        const options = {
           url: `${base}${this.message.id}/update`,
           form: {
             name: "John Smith",
             notes: "dees nutz"
           }
         };
//#1
         request.post(options,
           (err, res, body) => {

           expect(err).toBeNull();
//#2
           Message.findOne({
             where: { id: this.message.id }
           })
           .then((message) => {
             expect(message.name).toBe("John Smith");
             expect(message.notes).toBe("dees nutz");
             done();
           });
         });
     });

   });

  });
