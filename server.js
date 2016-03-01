var Hapi = require('hapi');
var Inert= require('inert');
var fs = require('fs');

const server = new Hapi.Server();

server.connection({ port:4000});

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
})



server.start((err) => {
  if(err){
     throw err;
  }
  console.log('Server is running at : ', server.info.uri);
});

});
