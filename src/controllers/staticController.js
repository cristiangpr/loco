module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "The Crop Doctor"});
  },

  about(req, res, next){
    res.render("static/about", {title: "About Us"});

  },

  services(req, res, next){
    res.render("static/services", {title: "Services"});

  }
}
