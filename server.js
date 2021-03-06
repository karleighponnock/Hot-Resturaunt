// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var tablesReservation = [];
var tablesWaitlist = []


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        routeName: "reservedtable",
        id: "",
        name: "",
        email: "",
        phone: "",
    }
]

//Routes//////////////////////////////////////////////////////////////

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
 // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
    tables.push(tables)
  });

  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var tables = req.body;
    
  });
    app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


