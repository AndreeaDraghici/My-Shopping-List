const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 5500;

// Open a connection to the SQLite database (you can modify the database name)
const db = new sqlite3.Database('list_database.db');

// Create a table for the shopping list if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS shoppingList (id INTEGER PRIMARY KEY, item TEXT)');

// Middleware to allow access to the JSON request body
app.use(express.json());

// Middleware to serve static files from the current directory
app.use(express.static(__dirname));

// Endpoint to get the shopping list
app.get('/api/shoppingList', (req, res) => {
    db.all('SELECT * FROM shoppingList', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Fetched data from the database:', rows);
            res.json(rows);
        }
    });
});

// Endpoint to add an item to the shopping list
app.post('/api/shoppingList', (req, res) => {
    const item = req.body.item;

    if (!item) {
        return res.status(400).json({ error: 'Item is required' });
    }

    db.run('INSERT INTO shoppingList (item) VALUES (?)', [item], function(err) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ id: this.lastID, item: item });
        }
    });
});

// Endpoint to delete an item from the shopping list
app.delete('/api/shoppingList/:id', (req, res) => {
    const id = req.params.id;

    db.run('DELETE FROM shoppingList WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ success: true });
        }
    });
});

// Endpoint for HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
