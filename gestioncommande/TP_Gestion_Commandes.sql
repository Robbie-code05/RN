
-- TP : Création et Gestion d'une Base de Données de Commandes

-- Étape 1 : Création de la base de données
CREATE DATABASE GestionCommandes;
USE GestionCommandes;

-- Étape 2 : Création des tables

-- Table Clients
CREATE TABLE Clients (
    id_client INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(150),
    date_inscription DATE
);

-- Table Produits
CREATE TABLE Produits (
    id_produit INT AUTO_INCREMENT PRIMARY KEY,
    nom_produit VARCHAR(255),
    prix DECIMAL(10, 2),
    stock INT
);

-- Table Commandes
CREATE TABLE Commandes (
    id_commande INT AUTO_INCREMENT PRIMARY KEY,
    id_client INT,
    date_commande DATE,
    montant_total DECIMAL(10, 2),
    FOREIGN KEY (id_client) REFERENCES Clients(id_client)
);

-- Table DetailsCommandes
CREATE TABLE DetailsCommandes (
    id_detail INT AUTO_INCREMENT PRIMARY KEY,
    id_commande INT,
    id_produit INT,
    quantite INT,
    prix_total DECIMAL(10, 2),
    FOREIGN KEY (id_commande) REFERENCES Commandes(id_commande),
    FOREIGN KEY (id_produit) REFERENCES Produits(id_produit)
);

-- Étape 4 : Insertion de données

-- Insérer des clients
INSERT INTO Clients (nom, prenom, email, date_inscription) VALUES
('Dupont', 'Marie', 'marie.dupont@example.com', '2023-01-10'),
('Durand', 'Paul', 'paul.durand@example.com', '2023-02-20'),
('Martin', 'Alice', 'alice.martin@example.com', '2023-03-15');

-- Insérer des produits
INSERT INTO Produits (nom_produit, prix, stock) VALUES
('Ordinateur portable', 1200.00, 10),
('Smartphone', 800.00, 15),
('Casque audio', 150.00, 30),
('Clavier', 50.00, 50);

-- Insérer des commandes
INSERT INTO Commandes (id_client, date_commande, montant_total) VALUES
(1, '2023-12-01', 1950.00),
(2, '2023-12-03', 800.00);

-- Insérer des détails de commandes
INSERT INTO DetailsCommandes (id_commande, id_produit, quantite, prix_total) VALUES
(1, 1, 1, 1200.00),
(1, 3, 5, 750.00),
(2, 2, 1, 800.00);
