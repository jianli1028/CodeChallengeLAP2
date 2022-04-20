DROP TABLE IF EXIST posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(200),
    author VARCHAR(200),
    story TEXT,
    publicationDay DATE
)