-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS Vendas;
USE Vendas;

-- Criar a tabela de produtos
CREATE TABLE IF NOT EXISTS Produtos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Quantidade INT,
    DataCompra DATE
);

-- Inserir dados de exemplo na tabela de produtos
INSERT INTO Produtos (Nome, Quantidade, DataCompra) VALUES
('Produto A', 10, '2024-03-01'),
('Produto B', 5, '2024-03-01'),
('Produto A', 8, '2024-03-02'),
('Produto C', 12, '2024-03-02'),
('Produto B', 3, '2024-03-03'),
('Produto A', 6, '2024-03-03');

-- Criar a stored procedure para gerar o relatório diário da quantidade de produtos comprados
DELIMITER //

CREATE PROCEDURE RelatorioQuantidadeProdutosPorDia()
BEGIN
    SELECT DataCompra, SUM(Quantidade) AS TotalProdutosComprados
    FROM Produtos
    GROUP BY DataCompra;
END//

DELIMITER ;
