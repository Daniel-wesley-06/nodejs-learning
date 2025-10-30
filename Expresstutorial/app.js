const express = require ('express');
const app = express();
const path = require('path');

// app.get
app.get('/', (req, res) => {
    // console.log(req)
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    console.log('User hit the request url')
    res.status(200).send('Homepage')
})
app.get('/about', (req, res) => {
    res.status(200).send('About page')
})

// app.all is not available for latest version of express
app.use((req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
}); 

// app.post
// app.put
// app.delete

// app.use

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})