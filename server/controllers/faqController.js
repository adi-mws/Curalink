import { Faq } from '../models/faq.js';

// Create a new FAQ
export const createFaq = async (req, res) => {
  try {
    const { type, question, answer } = req.body;
    const newFaq = new Faq({ type, question, answer });
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all FAQs (with optional filtering by type + pagination)
export const getAllFaqs = async (req, res) => {
  try {
    const { type, page = 1, limit = 10 } = req.query;

    const filter = type ? { $or: [{ type }, { type: 'all' }] } : {};

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const faqs = await Faq.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Faq.countDocuments(filter);

    res.status(200).json({
      faqs,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single FAQ by ID
export const getFaqById = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findById(id);
    if (!faq) return res.status(404).json({ error: 'FAQ not found' });
    res.status(200).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an FAQ by ID
export const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFaq = await Faq.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedFaq) return res.status(404).json({ error: 'FAQ not found' });
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an FAQ by ID
export const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFaq = await Faq.findByIdAndDelete(id);
    if (!deletedFaq) return res.status(404).json({ error: 'FAQ not found' });
    res.status(200).json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get FAQs for doctors (type: "doctors" or "all") with pagination
export const getAllDoctorFaqs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const filter = { type: { $in: ['doctors', 'all'] } };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const faqs = await Faq.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Faq.countDocuments(filter);

    res.status(200).json({
      faqs,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get FAQs for patients (type: "patients" or "all") with pagination
export const getAllPatientFaqs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const filter = { type: { $in: ['patients', 'all'] } };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const faqs = await Faq.find(filter)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Faq.countDocuments(filter);

    res.status(200).json({
      faqs,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
