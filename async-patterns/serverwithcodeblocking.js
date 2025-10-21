const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        // Blocking code !!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        return res.end('Here is our short history')
    }
    res.end('Error page')
})


server.listen(5000, () => {
    console.log('Server is listening on port : 5000....')
})