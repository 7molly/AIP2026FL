var User = require("../models/user.js").User;

module.exports = async function(req, res, next) {
  res.locals.user = null;
  if (req.session.user_id) {
    try {
      var user = await User.findById(req.session.user_id);
      if (user) {
        res.locals.user = user;
      }
    } catch(err) {
      console.error(err);
    }
  }
  next();
};
