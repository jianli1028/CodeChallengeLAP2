const Post = require("../models/posts");

async function show (req, res) {
    try {
        const posts = await Post.findById(req.params.id);
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({err})
    }
};

async function create (req, res) {
    try {
        const posts = await Post.create(req.body);
        res.status(200).json(book)
    } catch (err) {
        res.status(422).json({err})
    }
};

