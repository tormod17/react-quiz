var Hapi = require('hapi');
var Inert= require('inert');

var fs = require('fs');

var server = new Hapi.Server();


var host ='localhost';
if(process.env.PORT) host = '0.0.0.0';

var port = 8000;
console.log('PORT', host ,port);
var serverOptions = {
      port:port,
      host: host
};

server.connection(serverOptions);

server.register(Inert, (err) => 

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
