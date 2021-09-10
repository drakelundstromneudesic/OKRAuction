-- Switch to the system (aka master) database
USE master;
GO

-- Delete the SilentAuction database (IF EXISTS)
DROP DATABASE IF EXISTS SilentAuction;
GO

-- Create a new SilentAuction database
CREATE DATABASE SilentAuction;
GO

-- Switch to the SilentAuction database
USE SilentAuction
GO

BEGIN TRANSACTION;

CREATE TABLE Items (
    id integer identity NOT NULL,
    name varchar(100) NOT NULL,
	description varchar(500) NOT NULL,
    seller_first_name varchar(45) NOT NULL,
    seller_last_name varchar(45) NOT NULL,
    seller_email varchar(100) NOT NULL,
    link_to_image varchar(1000),
    is_active BIT DEFAULT 1,
    is_sold BIT DEFAULT 0,
	closing_time datetime NOT NULL,
	starting_bid decimal NOT NULL, 
	minimum_increase decimal DEFAULT 5,
    CONSTRAINT pk_Items_id PRIMARY KEY (id)
);

CREATE TABLE Users (
    User_id integer identity NOT NULL,
	username varchar(50) NOT NULL,
    first_name varchar(45) NOT NULL,
    last_name varchar(45) NOT NULL,
	email varchar(100) NOT NULL,
	password_hash varchar(200) NOT NULL,
	salt varchar(200) NOT NULL,
	user_role varchar(50) NOT NULL
    CONSTRAINT pk_Users_User_id PRIMARY KEY (User_id)
);


CREATE TABLE Bids (
    Bid_id integer identity NOT NULL,
    id integer NOT NULL,
	Bidder_id integer NOT NULL,
	bid_timestamp datetime NOT NULL,
	bid_amount decimal NOT NULL,
    CONSTRAINT pk_Bids_Bid_id PRIMARY KEY (Bid_id)
);



SET IDENTITY_INSERT Items ON
INSERT INTO Items (id, name, description, seller_first_name, seller_last_name, seller_email, link_to_image, closing_time, starting_bid) 
VALUES (1, 'Fancy Water Bottle', 'It is a really nice water bottle', 'Drake', 'Lundstrom', 'drakelundstrom@gmail.com', 'https://cdn.shopify.com/s/files/1/0519/7573/products/CrystalPointWaterBottles-25_2000x.jpg?v=1599329480' , '2021-02-28 12:05:20', 20);

INSERT INTO Items (id, name, description, seller_first_name, seller_last_name, seller_email, closing_time, starting_bid, minimum_increase) 
VALUES (2, '1oz gold coin', 'literal 24k gold', 'Fancy', 'Pants', 'fake@gmail.com', '2021-03-28 12:05:20', 800, 50);

INSERT INTO Items (id, name, description, seller_first_name, seller_last_name, seller_email, closing_time, starting_bid, minimum_increase) 
VALUES (3, 'Drawing tablet', 'A really cool drawing tablet', 'Copper', 'Lundstrom', 'thisisfake@gmail.com', '2021-03-10 16:05:20', 200, 20);
SET IDENTITY_INSERT Items OFF


SET IDENTITY_INSERT Users ON
INSERT INTO Users (User_id, username, first_name, last_name, password_hash, salt, email, user_role) 
VALUES (1, 'DrakeLundstrom', 'Drake', 'Lundstrom', 'YhyGVQ+Ch69n4JMBncM4lNF/i9s=', 'Ar/aB2thQTI=', 'drakelundstrom@gmail.com','admin');
INSERT INTO Users (User_id, username, first_name, last_name, password_hash, salt, email, user_role) 
VALUES (2, 'Spongebob', 'Fancy', 'Pants', 'Jg45HuwT7PZkfuKTz6IB90CtWY4=','LHxP4Xh7bN0=', 'fake@gmail.com', 'user');
INSERT INTO Users (User_id, username, first_name, last_name, password_hash, salt, email, user_role) 
VALUES (3, 'JadeDolphin', 'Copper', 'Lundstrom', 'Jg45HuwT7PZkfuKTz6IB90CtWY4=','LHxP4Xh7bN0=', 'thisisfake@gmail.com', 'user');
SET IDENTITY_INSERT Users OFF




INSERT INTO Bids (id, Bidder_id, bid_timestamp, bid_amount) VALUES (1, 3, '2021-02-22 09:29:20', 25);
INSERT INTO Bids (id, Bidder_id, bid_timestamp, bid_amount) VALUES (1, 1, '2021-02-22 09:30:20', 35);
INSERT INTO Bids (id, Bidder_id, bid_timestamp, bid_amount) VALUES (1, 2, '2021-02-22 09:35:20', 100);


ALTER TABLE Bids
ADD FOREIGN KEY(id) 
REFERENCES Items(id);


ALTER TABLE Bids
ADD FOREIGN KEY(Bidder_id)
REFERENCES Users(User_id);



Commit Transaction

