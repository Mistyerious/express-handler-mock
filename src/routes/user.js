const { Router, get } = require('../structures')

// Extend the Router class we made and make it take in a path that we pass directly to the super so it can correctly register the path the router takes
class UserRouter extends Router {
    constructor(path) {
        super(path);
    }

    // we use @get('/:id') here to specify hello is a method that does a get request at the path /:id (:id can be anything as its a parameter)
    @get('/:id')
    hello(req, res) {
        res.send(`Hello ${req.params.id}`)
    }
}

module.exports = {UserRouter}