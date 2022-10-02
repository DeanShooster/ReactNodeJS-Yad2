const express = require('express');
const cors = require('cors');
const connectSqlDB = require('./db/sqlConnect');
const {ErrorHandler} = require('./middleware/errorHandler');

const userRouter = require('./routers/userRouter');
const stateRouter = require('./routers/stateRouter');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(stateRouter);
app.use(ErrorHandler);

app.listen(port, async ()=>{ console.log(`Server is on Port ${port}, Awaiting DB Connection...`); await connectSqlDB(); console.log('Connected to SQL DB.'); })