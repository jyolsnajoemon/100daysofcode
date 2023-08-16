const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "this is the best content on the interent so far so use it wisely"
    const params = {'title': 'pubG is the best game', "content": con}
    res.status(200).render('index.pug', params)
})

// START THE SERVER
app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`)
});