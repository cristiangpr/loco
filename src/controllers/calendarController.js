module.exports = {
  fullCalendar(req, res, next){
    res.render("calendar/fullcalendar", {title: "The Crop Doctor Schedule"});
  }

}
