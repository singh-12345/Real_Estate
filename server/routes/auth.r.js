import express from 'express';
import { signup } from '../controllers/auth.c.js';
import { signin } from '../controllers/auth.c.js';
import { google } from '../controllers/auth.c.js';
import { signOut } from '../controllers/auth.c.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;