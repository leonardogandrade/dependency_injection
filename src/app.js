const server = require('./server');
const repository = require('../src/models/user-model');
const { dbConnect } = require('./db/database');

const PORT = process.env.PORT;

// Database connection
dbConnect();

const app = server(repository);

app.listen(PORT, () => {
    console.log(`[user] - microservice:${PORT} - running`);
}).on('error_user', (err) => {
    console.log(`ERROR: ${err}`);
    process.exit(1);
});
