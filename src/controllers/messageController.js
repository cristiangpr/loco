 const messageQueries = require("../db/queries.messages.js");

module.exports = {
  index(req, res, next){
    messageQueries.getAllMessages((err, messages) => {

//#3
        if(err){
          res.redirect(500, "static/index");
        } else {
          res.render("messages/index", {messages});
        }
      })
    },

  new(req, res, next){
    res.render("messages/new", {title: "Contact Us"});
  },

  create(req, res, next){
   let newMessage = {
     name: req.body.name,
     content: req.body.content,
     email: req.body.email,
     phone: req.body.phone
   };
   messageQueries.addMessage(newMessage, (err, message) => {
     if(err){
       res.redirect(500, "/messages/new");
     } else {
       res.redirect(303, `/`);
     }
   });
 },
 show(req, res, next){

//#1
   messageQueries.getMessage(req.params.id, (err, message) => {

//#2
     if(err || message == null){
       res.redirect(404, "/");
     } else {
       res.render("messages/show", {message});
     }
   });
 },
 destroy(req, res, next){
  messageQueries.deleteMessage(req.params.id, (err, message) => {
    if(err){
      res.redirect(500, `/messages/${message.id}`)
    } else {
      res.redirect(303, "/messages")
    }
  });
},
edit(req, res, next){
    messageQueries.getMessage(req.params.id, (err, message) => {
      if(err || message == null){
        res.redirect(404, "/");
      } else {
        res.render("messages/edit", {message});
      }
    });
  },
  update(req, res, next){

//#1
    messageQueries.updateMessage(req.params.id, req.body, (err, message) => {

//#2
      if(err || message == null){
        res.redirect(404, `/messages/${req.params.id}/edit`);
      } else {
        res.redirect(`/messages/${message.id}`);
      }
    });
  }

}
