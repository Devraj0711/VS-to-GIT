const http= require('http');

const server= http.createServer(function(req,res)
{
     res.setHeader('Content-Type', 'text/plain');
     res.end("Devraj")
     console.log("Devraj");
});
const port=4000;
server.listen(port, () =>{
     console.log('${port}');
});