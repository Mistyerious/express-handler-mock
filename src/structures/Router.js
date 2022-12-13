const {Router} = require('express')

function post(path){
    return function(target) {
        target.constructor.prototype.method = "post"
        target.constructor.prototype.path = path
    }
}

function get(path){
    return function(target) {
        target.constructor.prototype.method = "get"
        target.constructor.prototype.path = path
    }
}


function patch(path){
    return function(target) {
        target.constructor.prototype.method = "patch"
        target.constructor.prototype.path = path
    }
}


function del(path){
    return function(target) {
        target.constructor.prototype.method = "delete"
        target.constructor.prototype.path = path
    }
}

class OlogyRouter {

    constructor(path) {
        this.router = Router()

        this.path = path

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