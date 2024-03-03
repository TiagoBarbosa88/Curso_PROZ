-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS Loja;
USE Loja;

-- Criar a tabela Cliente
CREATE TABLE IF NOT EXISTS Cliente (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Email VARCHAR(100)
);

-- Inserir dados na tabela Cliente
INSERT INTO Cliente (Nome, Email) VALUES
('João', 'joao@email.com'),
('Maria', 'maria@email.com');

-- Criar a tabela Pedido
CREATE TABLE IF NOT EXISTS Pedido (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ClienteID INT,
    Data DATE,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ID)
);

-- Inserir dados na tabela Pedido
INSERT INTO Pedido (ClienteID, Data) VALUES
(1, '2024-03-03'),
(2, '2024-03-04');

-- Criar a tabela Produto
CREATE TABLE IF NOT EXISTS Produto (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Preco DECIMAL(10,2)
);

-- Inserir dados na tabela Produto
INSERT INTO Produto (Nome, Preco) VALUES
('Camisa', 29.99),
('Calça', 39.99);

-- Consulta para obter todos os pedidos de cada cliente com seus produtos
SELECT Cliente.Nome, Pedido.Data, Produto.Nome, Produto.Preco
FROM Cliente
JOIN Pedido ON Cliente.ID = Pedido.ClienteID
JOIN Pedido_Produto ON Pedido.ID = Pedido_Produto.PedidoID
JOIN Produto ON Pedido_Produto.ProdutoID = Produto.ID;
