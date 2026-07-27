const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

let requestCount = 0;
let totalResponseTime = 0;

// cors 
app.use(cors());



// The requested health endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});


app.listen(port, () => {
    console.log(`API running on port ${port}`);
});