const express=require("express")
const movieController=require('./../Controllers/movieController')

const router=express.Router();





router.
route("/")
.get(movieController.getallMovie)
.post(movieController.postMovie);


router
  .route("/:id")
  .get(movieController.singleMovie)
  .delete(movieController.deleteMovie)
  .patch(movieController.patchReq);

module.exports=router