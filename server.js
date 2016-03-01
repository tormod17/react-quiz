var Hapi = require('hapi');
var Inert= require('inert');

var fs = require('fs');

const server = new Hapi.Server();

var serverOptions = {
      port:(process.env.PORT || 8000),
      host: host
};

server.connection({ port:4000});

var host ='localhost';
if(process.env.PORT) host = '0.0.0.0';



server.register(Inert, (err) => {


server.route({
      method:'GET',
      path:'/{param*}',
      handler: {
          directory:{
              path:'public'
          }
      }
}),

server.route({
    method:'GET',
    path:'/quiz.json',
    handler: function(request, reply){

        reply.file('quiz.json');

    }
}),





server.start((err) => {
  if(err){
     throw err;
  }
  console.log('Server is running at : ', server.info.uri);
});

});
