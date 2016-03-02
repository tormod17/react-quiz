var Hapi = require('hapi');
var Inert= require('inert');

var fs = require('fs');

const server = new Hapi.Server();


var host ='localhost';
if(process.env.PORT) host = '0.0.0.0';

var port =process.env.PORT || 8000;
console.log('PORT', host ,port);
var serverOptions = {
      port:port,
      host: host
};

server.connection(serverOptions);

server.register(Inert, (err) => {


server.route({
      method:'GET',
      path:'/',
      handler: function(request, reply){
            reply.file('public/index.html');
      }

}),


server.route({
      method:'GET',
      path:'/scripts/main.js',
      handler: function(request, reply){
            reply.file('public/scripts/main.js');
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
