//import express
const express = require("express");
const { json } = require("express/lib/response");
const moviesRouter=require("./Routes/moviesRoutes")

//import the file system module
const { parse } = require("path");

const app = express();



//middleware
app.use(express.json());
app.use(express.static("./public"))

//get req
// app.get('/',(req,res)=>{
//         res.status(200).send("hello.")
// })

//the request send the json

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "uditha", status: 200 });
// });

// app.get("/api/movies", getallMovie);

//api route parameter
//when we use the router parameter we use the the after end point : with parameter
//we can pass the multiple router parameters
//we pass three parameter we have to pass the three parameter
//when using the ? we can indicate the that parameter optional
//"/api/movies/:id/:name/:x?"
// app.get("/api/movies/:id",singleMovie);
// //path req
// app.patch("/api/movies/:id",patchReq)

// app.delete("/api/movies/:id",deleteMovie)

// //post req
// app.post("/api/movies",postMovie );



app.use("/api/movies",moviesRouter);

module.exports=app;
