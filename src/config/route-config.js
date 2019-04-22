module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const blogRoutes = require("../routes/blog");
    const messageRoutes = require("../routes/messages");
    const calendarRoutes = require("../routes/calendar");

    app.use(calendarRoutes);
    app.use(messageRoutes);
    app.use(blogRoutes);
    app.use(staticRoutes);
  }
}
