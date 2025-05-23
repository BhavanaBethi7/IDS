const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

mongoose.connect('mongodb://localhost:27017/energyAuditApp');

const createAdmin = async () => {
  const email = 'admin@example.com';
  const password = await bcrypt.hash('admin123', 10);

  const admin = new Admin({ email, password });
  await admin.save();
  console.log('Admin created!');
  mongoose.disconnect();
};

createAdmin();
