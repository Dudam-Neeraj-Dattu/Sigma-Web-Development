import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({
  id: String, 
  site: String,
  username: String,
  password: String,
});

const Password = mongoose.model('Password', passwordSchema);

export default Password;
