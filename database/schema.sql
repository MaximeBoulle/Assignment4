CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    username VARCHAR(50)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    salary DECIMAL(10, 2)
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    population INT,
    country VARCHAR(50)
);

CREATE TABLE hobbies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    duration_minutes INT
);

CREATE TABLE live (
    id SERIAL PRIMARY KEY,
    id_1 SERIAL,
    FOREIGN KEY(id) REFERENCES users(id),
    FOREIGN KEY(id_1) REFERENCES cities(id)
);

CREATE TABLE work (
    id SERIAL PRIMARY KEY,
    id_1 SERIAL,
    FOREIGN KEY(id) REFERENCES users(id),
    FOREIGN KEY(id_1) REFERENCES jobs(id)
);

CREATE TABLE practice (
    id SERIAL PRIMARY KEY,
    id_1 SERIAL,
    FOREIGN KEY(id) REFERENCES users(id),
    FOREIGN KEY(id_1) REFERENCES hobbies(id)
);
