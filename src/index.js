// We require babel so we can use those funky decorators without having to use typescript, and it just builds like normal
require('@babel/register')
const app = require('express')()
// Import our router from ./Routes
const {UserRouter} = require('./routes')

// Make an array of initiated Routes with their paths
let routes = [
    new UserRouter('/user')
]

// Loop through those routes and use app.use so express knows the correct route and router to use for all our routes
for(const route of routes){
    app.use(route.path, route.router)
}

// Lastly we call app.listen so we can actually start the webserver
app.listen(200, () => {
    console.log(`Listening at http://localhost:200`)
})