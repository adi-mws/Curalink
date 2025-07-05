import express from 'express';
import {
  createFaq,
  getAllFaqs,
  getFaqById,
  updateFaq,
  deleteFaq,
  getAllDoctorFaqs,
  getAllPatientFaqs,
  showAllFaqs
} from '../controllers/faqController.js';
import authenticateJWT, { authorizeRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new FAQ
router.post('/', authenticateJWT, authorizeRole('admin'), createFaq);

// Get all FAQs (optionally filtered via query)
// router.get('/', getAllFaqs);
router.get('/', showAllFaqs);

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
