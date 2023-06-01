var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

// recebendo dados dos pontos do usuario 
router.post("/pontos_finais", function (req, res) {
    usuarioController.pontos_finais(req, res);
});

//
router.get("/ranking", function (req, res){
    usuarioController.ranking(req, res);
});

//
router.get("/grafico:idUsuario", function (req, res){
    usuarioController.grafico(req, res);
});

module.exports = router;