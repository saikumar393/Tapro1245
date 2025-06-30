const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


dotenv.config();

const app = express();

app.use(bodyParser.json());


const adminRoutes = require('./routes/adminRoutes');
const employeeUserRoutes = require('./routes/employeeUserRoutes');

app.use('/api/admin', adminRoutes);       
app.use('/api/employee', employeeUserRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB connected successfully'))
.catch((err) => console.error(' MongoDB connection error:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
