const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/task-manager", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// const me = new User({
//   name: "               Rishabh              ",
//   email: "rish@gmail.com    ",
//   password: "helloworld123",
//   age: 21
// });

// const task = new Task({
//   description: "I am as description                "
// });

// task
//   .save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// me.save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });
