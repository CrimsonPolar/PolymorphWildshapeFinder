var fs = require('fs');
var path = require('path');
var express = require('express');
var port = process.env.port || 3000;
const compression = require('compression');

var mysql = require('mysql');
// Hardcoding this is terrible practice, but it's just proof of concept
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aK0Ito7$iqha74$az7Ba"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("== Successfully connected to SQL server!");
});

function queryDB(query) {
    con.query(query, function(err, result, fields) {
        if (err) {
            console.log("== Database error when using query:", query);
        } else {
            return result;
        }
    });
}

var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.use(compression());
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.status(200).render('index', {
        beastData: queryDB("SELECT * FROM beasts.stats WHERE CHARINDEX(" + req.query.name + ", name) > 0 ORDER BY " + (req.query.orderby || "name"))
    });
});

app.get('*', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
    console.log('== Server is listening on port', port);
});