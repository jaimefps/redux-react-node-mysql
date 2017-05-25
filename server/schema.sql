-- DROP DATABASE testData;

CREATE DATABASE testData;

USE testData;

-- NOTE: the "name & email"" pair is what gives each entry its unique key
-- such that it won't allow for repeated entries with that combination.
CREATE TABLE testTable (
  name VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(200) NOT NULL,
  PRIMARY KEY (name, email)
);