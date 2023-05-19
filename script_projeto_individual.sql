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


CREATE TABLE pontosUsuario(
idPontos INT PRIMARY KEY auto_increment,
FkJogo INT,
fkUsuario INT,
pontuacao INT,
dtPontuacao DATE,
constraint comp_fkJogo foreign key (FkJogo) references jogo(idJogo),
constraint comp_fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
)auto_increment = 1000;