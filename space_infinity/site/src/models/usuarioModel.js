var database = require("../database/config")
require = ("../../site/public/js/funcoes.js")


function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nickname, email, dtNasc, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nickname, email, dtNasc, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nickname, email, dtNasc, senha) VALUES ('${nickname}', '${email}', '${dtNasc}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// tabela pontos
// function pontos_finais(fkUsuario, pontosFinais){
//     var instrucao = `
//     INSERT INTO pontosUsuario (fkUsuario, pontuacao) VALUES ('${fkUsuario}','${pontosFinais}')`
    
//     return database.executar(instrucao)
// }

// function obterNomeUsuario(fkUsuario) {
//     var instrucao = `
//       SELECT nome
//       FROM usuario
//       WHERE id = '${fkUsuario}'`;
  
//     return database.executar(instrucao)
//       .then(function (resultado) {
//         // Extrair o nome do usuário do resultado da consulta
//         var nomeUsuario = resultado[0].nome;
//         return nomeUsuario;
//       });
//   }
  
//   function pontos_finais(fkUsuario, pontosFinais, nomeUsuario) {
//     var instrucao = `
//       INSERT INTO pontosUsuario (fkUsuario, pontuacao, nomeUsuario)
//       VALUES ('${fkUsuario}', '${pontosFinais}', '${nomeUsuario}')`;
  
//     return database.executar(instrucao);
//   }

function pontos_finais(fkUsuario, pontosFinais) {
    var instrucao = `
      INSERT INTO pontosUsuario (fkUsuario, pontuacao) 
      VALUES ('${fkUsuario}', '${pontosFinais}')`;
    
    return database.executar(instrucao);
  }

  function obterNomeUsuario(fkUsuario) {
    var instrucao = `
      SELECT nickname
      FROM usuario
      WHERE idUsuario = '${fkUsuario}'`;
  
    return database.executar(instrucao)
      .then(function (resultado) {
        // Extrair o nome do usuário do resultado da consulta
        var nomeUsuario = resultado[0].nickname;
        return nomeUsuario;
      });
  }
  
  

module.exports = {
    entrar,
    cadastrar,
    listar,
    pontos_finais,
    obterNomeUsuario
};