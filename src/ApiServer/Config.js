var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sql = require('mssql');


var config = {
    server: '172.16.12.30',
    database: 'Practise',
    user: 'sa',
    password: 'Bao8842553',
    port: 1433
};
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/studies', function (req, res, next) {
    // connect to your database
    sql.connect(config, function (err) {
        try{
            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();
            // query to the database and get the records
            // request.execute("SelectAllStudents", function (err, recordset) {
            request.query("SELECT * FROM Student", function (err, recordset) {
                if(err) throw error;
                // console.log(res.send(recordset));
                res.send(recordset)
                sql.close();
            });
        }catch(err){
            sql.close();
        };        
    });
});

/**
 * Insert New User
 */
app.post('/adduser', function (req, res, next) {
    var userName = req.body.userName;
    sql.connect(config, function (err) {
        try{
            if (err) throw err;

            // create Request object
            var request = new sql.Request();            
            request.input("Name", sql.NVarChar, userName);
            // query to the database and get the records
            request.execute("InsertNewStudent").then(function (recordset) {
                // console.log(recordset);
                res.send(recordset)
                sql.close();
            });
        }catch(err){
            
            sql.close();
        };        
    });
});

/**
 * Delete User
 */
app.post('/deleteuser', function (req, res, next){
    var userId = req.body.userId;
    // console.log(req);
    sql.connect(config, function(err) {
        try{
            if(err) throw err;

            var request = new sql.Request();
            request.input("Id", sql.Int, userId);
            request.execute("DeleteUser").then(function (recordset) {
                res.send(recordset)
                sql.close();
            });
        }catch(err){
            sql.close();
        }
        
    })
});
/**
 * Edit Student
 */
app.post('/edituser', function (req, res, next){
    var userId = req.body.userId;
    var userName = req.body.userName;
    var rowVersion = '0x' + Buffer(req.body.rowVersion.data).toString('hex');
    sql.connect(config, function(err) {
        try{
            if(err) {
                console.log(err);
                throw err;
            }
            var request = new sql.Request();
            request.input("Id", sql.Int, userId);
            request.input("Name", sql.NVarChar, userName);
            request.input("RowVersion", sql.NVarChar, rowVersion);
            request.execute("UpdateStudent").then(function (recordset) {
                res.send(recordset)
                sql.close();
            });
        }catch(err){
            sql.close();
        }
    })

});
var server = app.listen(4000, function () {
    console.log('Server is running..');
});