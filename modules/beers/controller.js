var Beer = require("./model.js");

var Controller = {
  create: function(req, res) {
    var dados = req.body;

    var model = new Beer(dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Cerveja Inserida: ', data);
        res.json(data);
      }
    });
  },
  retrieve: function(req, res) {
    var query = {};
    Beer.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Cervejas Listadas: ', data);
        res.json(data);
      }
    });
  },
  get: function(req, res) {
    var query = {_id: req.params.id};
    Beer.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Cervejas Listadas: ', data);
        res.json(data);
      }
    });
  },
  update: function(req, res) {
    var query = {_id: req.params.id};
    var mod = req.body;

    Beer.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Cervejas alteradas: ', data);
        res.json(data);
      }
    });
  },
  delete: function(req, res) {
    var query = {_id: req.params.id};

    // É multi: true CUIDADO!
    Beer.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Cervejas deletadas: ', data);
        res.json(data);
      }
    });
  }
};

module.exports = Controller;