DROP TABLE IF EXIST posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(200),
    name VARCHAR(200),
    story TEXT,
    publicationDay DATE
)