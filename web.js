var express = require('express');
var app = express();
app.use(express.static('views'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/main.html');
});


app.listen(4000, () => {
    console.log('Website is now online\nhttp://127.0.0.1:5500/views/main.html\nhttp://localhost:4000')
});