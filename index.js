const express = require('express');
const app = express();
const showRoutes = require('./routes/showRoutes');

app.use('/', showRoutes);

app.listen(8080, () => console.log('Server running on port 8080'));