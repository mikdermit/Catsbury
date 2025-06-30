const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // For handling CORS issues

const app = express();
app.use(express.json());
app.use(cors());

// Create a connection pool (recommended for performance)
const pool = mysql.createPool({
    host: 'localhostcatsbury-park-db.ccvse686q60s.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'catsbury25',
    database: 'catsbury',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Example API endpoint to fetch data
app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM your_table', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});