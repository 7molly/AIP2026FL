var express = require('express');
var router = express.Router();
var Plugin = require('../models/plugin').Plugin;

/* Страница плагинов */
router.get("/:nick", async function(req, res, next) {
  try {
    var plugins = await Plugin.find({ nick: req.params.nick });
    if (!plugins.length) return next(new Error("Нет такого плагина в FlStudio"));
    var plugin = plugins[0];
    res.render('plugin', {
      title: plugin.title,
      picture: plugin.avatar,
      desc: plugin.desc
    });
  } catch(err) {
    next(err);
  }
});

module.exports = router;
