const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/candidates', (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data/database.json'), 'utf8');
        const candidates = JSON.parse(data);
        res.json(candidates);
    } catch (error) {
        console.error('Error reading candidates:', error);
        res.status(500).json({ error: 'Failed to fetch candidates' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
