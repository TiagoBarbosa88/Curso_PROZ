-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS Escola;
USE Escola;

-- Criar a tabela Aluno
CREATE TABLE IF NOT EXISTS Aluno (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Media DECIMAL(5,2) -- Armazenará a média das notas
);

-- Criar a tabela Notas
CREATE TABLE IF NOT EXISTS Notas (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    AlunoID INT,
    Nota DECIMAL(5,2),
    FOREIGN KEY (AlunoID) REFERENCES Aluno(ID)
);

-- Inserir dados na tabela Aluno
INSERT INTO Aluno (Nome) VALUES
('João'),
('Maria');

-- Inserir dados na tabela Notas
INSERT INTO Notas (AlunoID, Nota) VALUES
(1, 8.5),
(1, 7.0),
(2, 9.0),
(2, 8.0);

-- Criar o trigger
DELIMITER //
CREATE TRIGGER CalculaMedia AFTER INSERT ON Notas
FOR EACH ROW
BEGIN
    DECLARE media DECIMAL(5,2);
    
    -- Calcular a média das notas do aluno
    SELECT AVG(Nota) INTO media FROM Notas WHERE AlunoID = NEW.AlunoID;
    
    -- Atualizar o campo Media na tabela Aluno
    UPDATE Aluno SET Media = media WHERE ID = NEW.AlunoID;
END;
//
DELIMITER ;
