require('@babel/register')
const app = require('express')()
const {UserRouter} = require('./routes')

let routes = [
    new UserRouter('/user')
]

for(const route of routes){
    app.use(route.path, route.router)
}


app.listen(200, () => {
    console.log(`Listening at http://localhost:200`)
})