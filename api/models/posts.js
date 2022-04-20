const db = require("../dbConfig/init");

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.story = data.story;
        this.publicationDay = data.publicationDay
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT *
                                               FROM posts
                                               WHERE id = $1;`, [ id ]);
                let post = new Post(postData.rows[0]);
                resolve (post);
            } catch (err) {
                reject ("No posts found");
            }
        });
    };

    static async create(postData) {
        return new Promise (async (resolve, reject) =>{
            try {
                const {title, author, story, publicationDay} = postData;
                //let post = await Post.findOrCreateByName(author);
                let result = await db.query(`INSERT INTO posts (title, author, story, publicationDay)
                                             VALUE ($1, $2, $3, $4)
                                             RETURNING *;`, [title, author, story, publicationDay]);
                resolve (result.rows[0]);
            } catch(err) {
                reject("Your story could not be created");
            }
        });
    };

    static async edit(postData) {
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query(`UPDATE *
                                               FROM posts
                                               WHERE id = $1
                                               RETURNING author;`, [ this.id ]);
                resolve (result.rows[0]);
            } catch (err) {
                reject("Post could not be updated")
            }
        });
    };
};