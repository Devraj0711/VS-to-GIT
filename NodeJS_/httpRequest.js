const http= require('http');

const server= http.createServer(function(req,res)
{
     console.log(req);
     console.log("Devraj");
});
const port=4000;
server.listen(port, () =>{
     console.log("Devraj")
});