const express = require('express');
const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    return res.json({ message: "Hello from Docker Container" });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));