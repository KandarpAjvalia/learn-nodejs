const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Contest-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/create-users" method="POST"><input type="text" name="usernames"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/users') {
        res.write('<html>');
        res.write('<body><ul><li>Kandarp</li><li>Ajvalia</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-users' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports = requestHandler;