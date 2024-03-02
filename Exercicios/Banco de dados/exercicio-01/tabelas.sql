-- Criar o banco de dados ESCOLA
CREATE DATABASE ESCOLA;

-- Usar o banco de dados ESCOLA
USE ESCOLA;

-- Criar a tabela ALUNO
CREATE TABLE ALUNO (
    ID INT PRIMARY KEY,
    Nome VARCHAR(255),
    Email VARCHAR(255),
    Endereco VARCHAR(255)
);


-- Inserir registros na tabela ALUNO
INSERT INTO ALUNO (ID, Nome, Email, Endereco)
VALUES
(01, 'João Carlos', 'Jcarlos@gmail.com', 'Rua 13 de maio'),
(02, 'José Vitor', 'Jvitor@gmail.com', 'Rua da Saudade'),
(03, 'Paulo André', 'Pandr@gmail.com', 'Rua do Sol');



-- Criar tabela LIVRO_EMPRÉSTIMO
CREATE TABLE LIVRO_EMPRÉSTIMO (
    Cod_Livro INT,
    Cod_Emprestimo INT
);

-- Inserir dados na tabela LIVRO_EMPRÉSTIMO
INSERT INTO LIVRO_EMPRÉSTIMO (Cod_Livro, Cod_Emprestimo)
VALUES
(03, 01),
(01, 02),
(03, 02);

-- Criar tabela LIVRO
CREATE TABLE LIVRO (
    Cod_Livro INT,
    Titulo VARCHAR(255),
    Autor VARCHAR(255)
);

-- Inserir dados na tabela LIVRO
INSERT INTO LIVRO (Cod_Livro, Titulo, Autor)
VALUES
(01, 'Modelo Conceitual e Diagramas ER', 'Pressman, Roger S.'),
(02, 'Livro 2: Modelo Relacional e Algebra Relacional', 'Heuser, Carlos Alberto'),
(03, 'Livro 3: Linguagem SQL', 'Beighley, Lynn');

-- Criar tabela SESSAO
CREATE TABLE SESSAO (
    Codigo INT,
    Descricao VARCHAR(255),
    Localizacao VARCHAR(255)
);

-- Inserir dados na tabela SESSAO
INSERT INTO SESSAO (Codigo, Descricao, Localizacao)
VALUES
(01, 'Sessao1', 'Partilheira1'),
(02, 'Sessao2', 'Partilheira2'),
(03, 'Sessao3', 'Partilheira3');
