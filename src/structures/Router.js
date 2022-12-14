const {Router} = require('express')

// Decorator you'd apply to a controller class method specifying it as a post
function route(path, method){
    return function(target) {
        target.constructor.prototype.method = method
        target.constructor.prototype.path = path
    }
}

// Router class that stores the path and registers the routes of the router.
class OlogyRouter {

    constructor(path) {
        this.router = Router()

        this.path = `/api/${path.replace('/', '')}`

        this.register()
    }

    register(){
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        .filter(name => name  !== 'constructor')
        .map(key => this[key])
        methods.forEach(method => {
            this.router[method.method](method.path, method)
        })
    }
}

module.exports = { OlogyRouter, route }