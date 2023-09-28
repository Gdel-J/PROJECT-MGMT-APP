const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('../server/schema/schema');
const sampleData = require('./sampleData');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

// Connect to database
connectDB();

app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Project Management App API!');
});

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}));


app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Server running on port ${port}`.green);
});
