import express from 'express';
import Password from '../models/Password.js';

const router = express.Router();

// GET all passwords
router.get('/', async (req, res) => {
   const passwords = await Password.find();
   res.json(passwords);
});

// POST a new password
router.post('/', async (req, res) => {
   const { id, site, username, password } = req.body;
   const newPw = new Password({ id, site, username, password });
   await newPw.save();
   res.status(201).json(newPw);
});

// DELETE a password
router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   await Password.deleteOne({ id });
   res.json({ message: 'Password deleted' });
});

// PUT (update) a password
router.put('/:id', async (req, res) => {
   const { id } = req.params;
   const { site, username, password } = req.body;
   const updated = await Password.findOneAndUpdate(
      { id },
      { site, username, password },
      { new: true }
   );
   res.json(updated);
});

export default router;
