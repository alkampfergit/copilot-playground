const express = require('express');
const path = require('path');

const app = express();
const PORT = 12345;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve the JSON file
app.get('/adventure.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/adventure.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});