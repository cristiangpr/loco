module.exports = {
  index(req, res, next){
    res.render("blog/index", {title: "The Crop Doctor Blog"});
  }

}
