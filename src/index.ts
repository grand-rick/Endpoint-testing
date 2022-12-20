import express from 'express';

const app = express();
const port = 5000;

// set endpoint
app.get('/api', (req, res) => {
    res.send("Hello, World.");
});

// check for pot to avoid already in use error testing
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;


