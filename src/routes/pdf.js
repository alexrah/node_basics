import express from 'express';
import pdf from 'controller/pdf_generate';

let router = express.Router();
// test test test prova babel try reload again
router.get('/',pdf.generate);
router.get('/generate',pdf.generate);
router.get('/generate/pdf',pdf.generate);
