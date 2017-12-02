-- Drops the food if it exits currently --
DROP DATABASE IF EXISTS food_db;

-- create the food DATABASE --
CREATE DATABASE food_db; 

USE food_db;

CREATE TABLE meals (

id INTEGER AUTO_INCREMENT NOT NULL,
food VARCHAR(200),
amount INT(10),
fullness VARCHAR(200),
note VARCHAR(500),
picture VARCHAR(100)

PRIMARY KEY(id)

)

