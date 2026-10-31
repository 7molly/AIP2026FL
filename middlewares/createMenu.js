var Plugin = require("../models/plugin").Plugin;

module.exports = async function(req, res, next) {
  res.locals.nav = [];
  try {
    var menu = await Plugin.find({}, { _id: 0, title: 1, nick: 1 });
    if (menu && menu.length !== 0) {
      res.locals.nav = menu;
    }
  } catch(err) {
    console.error(err);
  }
  next();
};
