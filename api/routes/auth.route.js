import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

// Define tus rutas aquí
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;
