//1 import json-server
const jsonServer=require('json-server')
//2 create a server application
const restServer=jsonServer.create()
// setup path for db.json
const router=jsonServer.router('db.json')
// return a middleware instace used by json-server
const middleware=jsonServer.defaults()
//setup the port
const port=3001
//use in server
restServer.use(middleware)
restServer.use(router)
// to run the server
restServer.listen(port,()=>{
    console.log("your server is ready to run"+port);
})