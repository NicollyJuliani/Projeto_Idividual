CREATE DATABASE Projeto_individual;
USE  Projeto_individual;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nickname VARCHAR(45),
email VARCHAR(45),
dtNasc DATE,
senha VARCHAR(45)
);

SELECT * FROM usuario;

INSERT INTO usuario VALUES	
(NULL, 	'melissa', 'melissa@gmail.com', null, '12345');

DELETE FROM usuario WHERE idUsuario = 2;

CREATE TABLE jogo(
idJogo INT primary KEY auto_increment,
nomeJogo varchar(45),
pontuacaoMax INT
)auto_increment = 100;

INSERT INTO jogo VALUES 
(null, "Quiz", "100"),
(null, "Quiz 2", "100");

CREATE TABLE pontosUsuario(
idPontos INT PRIMARY KEY auto_increment,
FkJogo INT,
fkUsuario INT,
pontuacao INT,
dtPontuacao DATE,
constraint comp_fkJogo foreign key (FkJogo) references jogo(idJogo),
constraint comp_fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
)auto_increment = 1000;

desc pontosUsuario;
ALTER TABLE pontosUsuario modify column dtPontuacao datetime default current_timestamp;

INSERT INTO pontosUsuario VALUES
(null, 100, 3, 20, default),
(null, 100, 4, 100, default);

SELECT usuario.nickname, pontosUsuario.pontuacao FROM usuario JOIN pontosUsuario ON fkUsuario = idUsuario
WHERE nickname = 'nicolly' limit 1;
