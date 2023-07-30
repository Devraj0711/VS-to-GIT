const http=require('http');
const server=http.createServer((req,res)=> {
    const url= req.url;
    if(url==='/home')
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Welcome Home");
    }
    else if(url==='/about')
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end( "Welcome to About Us Page");
    }
    else if(url==='/node')
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Welcome to Node JS project");
    }
    else
    {
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end("Invalid URL");
    }
});

server.listen(3000);