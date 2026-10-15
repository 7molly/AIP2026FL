var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FlStudio' });
});

/* Страница Sytrus */
router.get('/sytrus', function(req, res, next) {
  res.render('plugin', {
    title: "Sytrus",
    picture: "/images/sytrus.png",
    desc: "Мощный гибридный синтезатор с возможностями FM, RM и субтрактивного синтеза."
  });
});

/* Страница Harmor */
router.get('/harmor', function(req, res, next) {
  res.render('plugin', {
    title: "Harmor",
    picture: "/images/harmor.png",
    desc: "Аддитивно-субтрактивный синтезатор и генератор звуковых текстур с расширенным ресинтезом."
  });
});

/* Страница Gross Beat */
router.get('/grossbeat', function(req, res, next) {
  res.render('plugin', {
    title: "Gross Beat",
    picture: "/images/grossbeat.png",
    desc: "Инструмент манипуляции временем и громкостью для создания глитч, скретч и сайдчейн эффектов."
  });
});

module.exports = router;
