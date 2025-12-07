const express = require('express');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; 

// Configures the Access-Control-Allow-Origin CORS header.
app.use(cors({
    origin: 'http://localhost:5173/' 
}));

// middleware for accept json
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to Backend Server');
});