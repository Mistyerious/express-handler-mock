const { Router, get } = require('../structures')

class UserRouter extends Router {
    constructor(path) {
        super(path);
    }

    @get('/:id')
    hello(req, res) {
        res.send(`Hello ${req.params.id}`)
    }
}

module.exports = {UserRouter}