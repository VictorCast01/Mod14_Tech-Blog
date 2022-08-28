const { User } = require('../models/user')

const userData = [
    {
        username:"webdeveloper101",
        password:"yesyes1",
        email:"webdeveloper@gmail.com",

    },
    {
       username:"the new guy",
       password:"batman5",
       email: "batman@gmail.com",
    },
    {
        username:"backend master",
        password:"p@ssword1",
        email:"tester@yahoo.com",
    },
    {
        username:"stylist",
        password:"style6",
        email:"creater@gmail.com",
    },
    {
        username:"MYSQL GUY",
        password:"hardwork2",
        email:"databaser@gmail.com",
    }

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;