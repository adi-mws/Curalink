import Patient from '../models/patient.model.js'; // Adjust path based on your structure

// GET all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate('user');
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// GET patient by ID
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate('user');

    if (!patient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// UPDATE patient by ID
export const updatePatientById = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, data: updatedPatient });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// DELETE patient by ID
export const deletePatientById = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

    if (!deletedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};
