import express from 'express';
import knex from 'knex';
import { dbConfig } from '../config.js';

const router = express.Router();
const db = knex(dbConfig);

// Get all cases
router.get('/', async (req, res) => {
  try {
    const cases = await db('case_details').select('*');
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cases' });
  }
});

// Get single case
router.get('/:id', async (req, res) => {
  try {
    const caseData = await db('case_details')
      .where('id', req.params.id)
      .first();
    
    if (!caseData) {
      return res.status(404).json({ error: 'Case not found' });
    }
    
    res.json(caseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch case' });
  }
});

// Create new case
router.post('/', async (req, res) => {
  try {
    const [id] = await db('case_details').insert(req.body);
    const newCase = await db('case_details').where('id', id).first();
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create case' });
  }
});

// Update case
router.put('/:id', async (req, res) => {
  try {
    await db('case_details')
      .where('id', req.params.id)
      .update(req.body);
    
    const updatedCase = await db('case_details')
      .where('id', req.params.id)
      .first();
    
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update case' });
  }
});

// Delete case
router.delete('/:id', async (req, res) => {
  try {
    await db('case_details')
      .where('id', req.params.id)
      .delete();
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete case' });
  }
});

export default router; 