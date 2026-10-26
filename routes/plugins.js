var express = require('express');
var router = express.Router();

/* GET plugins listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор для плагинов FL Studio');
});

/* Страница плагинов */
router.get("/:nick", function(req, res, next) {
  res.send(req.params.nick);
});

module.exports = router;
