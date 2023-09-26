const Movie = require("../Model/movieModel");

//get the all movies
exports.getallMovie = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.status(200).json({
      message: "find",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//filter with some data using the req id
exports.singleMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      message: "find",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.patchReq = async (req, res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "upadate",
      data: {
        movie: updateMovie,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

//insert the movie to the mongo db
exports.postMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({
      status: "create",
      data: {
        movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
