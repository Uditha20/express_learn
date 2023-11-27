const mongoose = require("mongoose");
const app = require("./index");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;
// console.log(process.env)

//connet to the remote database
mongoose.connect(process.env.CONN_STR).then((conn)=>{
  // console.log(conn);
  console.log("success");
})

// const testMovie=Movie({
//   name:"panda",
//   description:"action",
//   duration:139,
//   rating:4.5
// });

// testMovie.save().then(doc=>{
//   console.log("insert")
//   // console.log(doc)
// }).catch(err=>{
//   console.log("error occured"+err)
// });
//create the server
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
