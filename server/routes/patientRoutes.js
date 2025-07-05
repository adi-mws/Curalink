import express from 'express';
import {
  getAllPatients,
  getPatientById,
  updatePatientById,
  deletePatientById
} from '../controllers/patient.controller.js';

const router = express.Router();

// @route   GET /patients
router.get('/', getAllPatients);

// @route   GET /patients/:id
router.get('/:id', getPatientById);

// @route   PUT /patients/:id
router.put('/:id', updatePatientById);

// @route   DELETE /patients/:id
router.delete('/:id', deletePatientById);

export default router;
