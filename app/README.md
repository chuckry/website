
DEPENDENCIES  
============  
Node.js v0.10.29
mongodb v2.6.1


WEB APPLICATION  
===============  
The ktp web app browser client is implemented in /client

The web applications is accessible at kappathetapi.com/app


RESTFUL API  
===========  
Schemas in /model are exposed by a RESTful API, located at kappathetapi.com/api.  
  
To interface with the restful api, each request needs to come with an authentication token  
    t=5af9a24515589a73d0fa687e69cbaaa15918f833  
  
Currently the only route worth any value is:  
  
GET /api/users  
GET /api/users/:id  
PUT /api/users/:id  
  
For more information on the exact implementation of the API reference https://github.com/baugarten/node-restful  