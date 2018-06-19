var usersRouter = require('./map/users');
let routes = [
    {
        path: '/users',
        component: usersRouter
    }
];

module.exports = routes

