const fs = require("fs");
const Movie=require('../Model/movieModel')
//json.parse convert the json data javascript object
const movie = JSON.parse(fs.readFileSync("./data/movies.json"));

//middleware function
exports.checkID=(req,res,next,value)=>{
  const findMovie = movie.find((el) => el.id === value*1);
  
  if (!findMovie) {
    res.status(404).json({
      status: "fail",
      message: "movie" + value + "not found",
    });
  }
  next();
}




exports.getallMovie = (req, res) => {
    res.status(200).json({
      status: "sucess",
      data: {
        movie: movie,
      },
    });
  };
  
  exports.singleMovie = (req, res) => {
    // console.log(req.params);
    //convert  the string to int
    const id = req.params.id * 1;
  
    //find the the array element using parameter
   
  
    res.status(200).json({
      status: "success",
      data: {
        movie: findMovie,
      },
    });
  
    res.send("test movie");
  };
  exports.patchReq = (req, res) => {
    //get the id inside the parameter
    const id = req.params.id * 1;
  
    //return the object relavent id
    const updateMovie = movie.find((el) => el.id === id);
  
    //return the relevant movie index
    const newMovieIndex = movie.indexOf(updateMovie);
  
    //add a photo notion my doc
    Object.assign(updateMovie, req.body);
  
    movie[newMovieIndex] = updateMovie;
  
    fs.writeFile("./data/movies.json", JSON.stringify(movie), (err) => {
      res.status(200).json({
        status: "success",
        data: {
          movie: updateMovie,
        },
      });
    });
  };
  
  exports.deleteMovie = (req, res) => {
    const id = req.params.id * 1;
    const deleteMovie = movie.find((el) => el.id === id);
    const deleteIndex = movie.indexOf(deleteMovie);
    movie.splice(deleteIndex, 1);
  
    fs.write("./data/movies.json", JSON.stringify(movie), (err) => {
      res.status(204).json({
        status: "success",
        data: {
          movie: null,
        },
      });
    });
  };
  
  exports.postMovie = (req, res) => {
    // console.log(req.body);
    const newId = movie[movie.length - 1].id + 1;
  
    const newMovie = Object.assign({ id: newId }, req.body);
    movie.push(newMovie);
    fs.writeFile("./data/movies.json", JSON.stringify(movie), (err) => {
      res.status(201).json({
        status: "success",
        data: {
          movie: newMovie,
        },
      });
    });
    // res.send('create')
  };

