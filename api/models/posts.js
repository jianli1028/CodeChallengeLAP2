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
                const {title, author, story} = postData;
            }
        })
    }

}