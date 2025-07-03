import express from 'express';
import {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq,
  getAllDoctorFaqs,
  getAllPatientFaqs
} from '../controllers/faqController.js';

const router = express.Router();

// Create a new FAQ
router.post('/', createFaq);

// Get all FAQs (optionally filtered via query)
router.get('/', getAllFaqs);

// Get all doctor-specific FAQs (type: "doctors" or "all")
router.get('/doctors', getAllDoctorFaqs);

// Get all patient-specific FAQs (type: "patients" or "all")
router.get('/patients', getAllPatientFaqs);

// Get a single FAQ by ID
router.get('/:id', getFaqById);

// Update an FAQ by ID
router.put('/:id', updateFaq);

// Delete an FAQ by ID
router.delete('/:id', deleteFaq);

export default router;
