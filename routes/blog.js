const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const blogs = require('../data/blogs');

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, "../templates/index.html"));
})

router.get('/blogs/:slug', (req,res)=>{
    let ihi = blogs.filter((blog)=>{
        return blog.slug == req.params.slug
    })
    console.log('hi : ', ihi);
    res.sendFile(path.join(__dirname, "../templates/blogs.html"));
})


module.exports = router