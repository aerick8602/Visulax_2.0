const express = require('express');

const signUp = require('./middlewares/signUp');
const signIn = require('./middlewares/signIn');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const { mongoDBURL, PORT } = require('./connection/mongoose');

app.use(cors());
app.use(express.json());

app.post('/signUp', signUp);
app.post('/signIn', signIn);

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
