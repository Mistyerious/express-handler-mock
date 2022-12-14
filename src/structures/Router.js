const {Router} = require('express')

// Decorator you'd apply to a controller class method specifying it as a post
function post(path){
    return function(target) {
        target.constructor.prototype.method = "post"
        target.constructor.prototype.path = path
    }
}

// Decorator you'd apply to a controller class method specifying it as a get
function get(path){
    return function(target) {
        target.constructor.prototype.method = "get"
        target.constructor.prototype.path = path
    }
}

// Decorator you'd apply to a controller class method specifying it as a patch
function patch(path){
    return function(target) {
        target.constructor.prototype.method = "patch"
        target.constructor.prototype.path = path
    }
}

// Decorator you'd apply to a controller class method specifying it as a delete
function del(path){
    return function(target) {
        target.constructor.prototype.method = "delete"
        target.constructor.prototype.path = path
    }
}

// Router class that stores the path and registers the routes of the router.
class OlogyRouter {

    constructor(path) {
        this.router = Router()

        this.path = `/api/${path}`

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

module.exports = { OlogyRouter, post, get, del, patch }