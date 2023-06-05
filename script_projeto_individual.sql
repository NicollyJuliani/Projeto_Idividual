/*Criação de Banco de dados da Space Infinity*/
CREATE DATABASE Projeto_individual;
USE  Projeto_individual;

/*Table Usuario*/
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nickname VARCHAR(45),
email VARCHAR(45),
dtNasc DATE,
senha VARCHAR(45)
);

/*Tabela do jogo*/
CREATE TABLE jogo(
idJogo INT primary KEY auto_increment,
nomeJogo varchar(45),
pontuacaoMax INT
)auto_increment = 100;

/*Inserindo dios jogos e suas pontuações maximas na tabela*/
INSERT INTO jogo VALUES 
(null, "Quiz", "100"),
(null, "Quiz 2", "100");

/*Tabela pontuação do Usuario*/
CREATE TABLE pontosUsuario(
idPontos INT PRIMARY KEY auto_increment,
FkJogo INT,
fkUsuario INT,
pontuacao INT,
dtPontuacao DATE,
constraint comp_fkJogo foreign key (FkJogo) references jogo(idJogo),
constraint comp_fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
)auto_increment = 1000;

/*Alterando a date para datetime*/
ALTER TABLE pontosUsuario modify column dtPontuacao datetime default current_timestamp;

/*Selects das tabelas*/
SELECT * FROM usuario;
SELECT * FROM jogo;
SELECT * FROM pontosUsuario;

/*Select para mostrar nome do usuario e seus respectivos pontos de acordo com a fkUsuario*/
SELECT usuario.nickname, pontosUsuario.pontuacao FROM usuario JOIN pontosUsuario ON fkUsuario = idUsuario
WHERE idUsuario = 3;

/*Select para mostar o nome do usuario e a soma dos seus pontos, agrupados pela fk do usuario e ordenado pela pontuacao*/
SELECT usuario.nickname, SUM(pontuacao) AS PontuacaoMaxima
FROM pontosUsuario
JOIN usuario ON fkUsuario = idUsuario
GROUP BY fkUsuario
ORDER BY PontuacaoMaxima DESC;

/*Select para mostrar nome do usuario, todas suas pontuações e a data, pegando somente o dia e o mes e com o limite de 10 pontos*/
SELECT usuario.nickname, pontosUsuario.pontuacao, date_format(dtPontuacao, '%d-%m') as data FROM usuario JOIN pontosUsuario ON fkUsuario = idUsuario
WHERE fkUsuario = 15 limit 10;

/*Select para mostar somente os nomes dos usuarios*/
SELECT nickname FROM usuario;

delete from pontosUsuario WHERE fkUsuario = 3;
delete from usuario WHERE idUsuario = 3