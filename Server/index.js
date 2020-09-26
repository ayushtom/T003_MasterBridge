const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const userRoute = require('./routes/user.route');
const profileRoute = require('./routes/profile.routes');
const courseRoute = require('./routes/course.routes');

app.use('/users', userRoute);
app.use('/profile', profileRoute);
app.use('/course', courseRoute);

app.listen(PORT, () => console.log(`The Server has started on port ${PORT}.`));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('MongoDB started.');
  })
  .catch((err) => {
    console.log(err);
  });
