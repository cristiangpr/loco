const Message = require("./models").Message;

module.exports = {

//#1
  getAllMessages(callback){
    return Message.findAll()

//#2
    .then((messages) => {
      callback(null, messages);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addMessage(newMessage, callback){
   return Message.create({
     name: newMessage.name,
     content: newMessage.content,
     email: newMessage.email,
     phone: newMessage.phone
   })
   .then((message) => {
     callback(null, message);
   })
   .catch((err) => {
     callback(err);
   })
 },
 getMessage(id, callback){
    return Message.findByPk(id)
    .then((message) => {
      callback(null, message);
    })
    .catch((err) => {
      callback(err);
    })
  },

  deleteMessage(id, callback){
    return Message.destroy({
      where: {id}
    })
    .then((message) => {
      callback(null, message);
    })
    .catch((err) => {
      callback(err);
    })
  },
  updateMessage(id, updatedMessage, callback){
     return Message.findByPk(id)
     .then((message) => {
       if(!message){
         return callback("Message not found");
       }

//#1
       message.update(updatedMessage, {
         fields: Object.keys(updatedMessage)
       })
       .then(() => {
         callback(null, message);
       })
       .catch((err) => {
         callback(err);
       });
     });
   }
}
