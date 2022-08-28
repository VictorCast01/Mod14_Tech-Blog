const { Post } = require('../models/post');

const postData = [
    {
        title: "I love HTML!",
        post_content: "Learning HTML has shown me how to create my own webapge.",
        user_id: 1
    },
    {
        title:"Back-end developer",
        post_content: " I really enjoy the back-end developing using node,express, and sequelize.",
        user_id:3
    },
    {
        title:"MYSQL",
        post_content:"MYSQL syntax is the best. even with errors it's easier to understand",
        user_id:5
    },
    {
        title:"Coding",
        post_content:"I am new at coding and I'm working to be a fullstack developer. ",
        user_id:2
    },
    {
        title:"CSS",
        post_content:"CSS is an amazing piece of technology. I can style and make a page beautiful.",
        user_id:4
    },

]

const postSeed = () => User.bulkCreate(postData);

module.exports = postSeed;