DROP DATABASE SQL_Data;

CREATE DATABASE SQL_Data;

USE SQL_Data;

-- NOTE: the "name & email"" pair is what gives each entry its unique key
-- such that it won't allow for repeated entries with that combination.
CREATE TABLE sql_table (
  name VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(200) NOT NULL,
  PRIMARY KEY (name, email)
);