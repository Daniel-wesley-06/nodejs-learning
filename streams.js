const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt',
    {highWaterMark: 90000,
        encoding: 'utf8'
    }
);
// default 64kb
// last buffer - reminader
// highWaterMark - control size

stream.on('data',(result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))
// The 'data' event is triggered every time a new chunk of data is read from the file.
// The result is a Buffer object (raw binary data).
// Each time a chunk is received, it’s printed to the console.