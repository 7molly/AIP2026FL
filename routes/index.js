var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FlStudio' });
});

/* Страница Sytrus */
router.get('/sytrus', function(req, res, next) {
  res.send("<body style='background:#07090e;color:#00d2ff;font-family:sans-serif;padding:30px;'><h1>Страница Sytrus</h1><p style='color:#94a3b8;'>Легендарный FM/RM синтезатор FL Studio.</p></body>");
});

/* Страница Harmor */
router.get('/harmor', function(req, res, next) {
  res.send("<body style='background:#07090e;color:#00d2ff;font-family:sans-serif;padding:30px;'><h1>Страница Harmor</h1><p style='color:#94a3b8;'>Аддитивно-субтрактивный монстр саунд-дизайна.</p></body>");
});

/* Страница Gross Beat */
router.get('/grossbeat', function(req, res, next) {
  res.send("<body style='background:#07090e;color:#00d2ff;font-family:sans-serif;padding:30px;'><h1>Страница Gross Beat</h1><p style='color:#94a3b8;'>Тайм-манипулятор для глитча и сайдчейна.</p></body>");
});

module.exports = router;
