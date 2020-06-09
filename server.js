var fs = require('fs');
var path = require('path');
var express = require('express');
const mysql = require('mysql2/promise');
var port = process.env.port || 3000;
const compression = require('compression');

var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: null }));
app.set('view engine', 'handlebars');

app.use(compression());
app.use(express.static('public'));

// Only took me 7 1/2 hours to figure out this hacky fix
const asyncIndexMW = async(req, res, next) => {
    // Hardcoding this is terrible practice, but it's just proof of concept
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "aK0Ito7$iqha74$az7Ba",
        database: "beasts",
    });
    const [rows, fields] = await connection.execute("SELECT * FROM beasts.stats" +
        (req.query.name != undefined ? "WHERE name LIKE %" + req.query.name + "%" : "") + " ORDER BY " + (req.query.orderby || "name"));
    var beastData = [];
    for (var i = 0; i < rows.length; i++) {
        var obj = {
            name: rows[i].name,
            challenge_rating: rows[i].challenge_rating,
            environments: rows[i].environments,
            size: rows[i].size,
            hit_points: rows[i].hit_points,
            armor_class: rows[i].armor_class,
            strength: rows[i].strength,
            dexterity: rows[i].dexterity,
            constitution: rows[i].constitution,
            intelligence: rows[i].intelligence,
            wisdom: rows[i].wisdom,
            charisma: rows[i].charisma
        }
        beastData.push(obj);
    }
    req.data = beastData;
    next();
}

app.get('/', asyncIndexMW, function(req, res) {
    res.status(200).render('index', {
        beastData: req.data,
        error: false
    });
});

app.get('*', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
    console.log('== Server is listening on port', port);
});