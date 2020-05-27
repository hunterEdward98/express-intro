// Bring in express using require()
const express = require('express');

//Let's create our server object
const app = express();
const port = 5000;

//tell express to serve out html/js/css etc out of /public
app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})