import db from '../connection';

export interface Evidence {
  id?: number;
  title: string;
  description: string;
  type: string;
  source: string;
  date_added: Date;
  file_path?: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createEvidence = async (evidence: Evidence): Promise<number> => {
  const [id] = await db('evidence').insert(evidence);
  return id;
};

export const getEvidence = async (): Promise<Evidence[]> => {
  return db('evidence').select('*').orderBy('date_added', 'desc');
};

export const getEvidenceById = async (id: number): Promise<Evidence | undefined> => {
  return db('evidence').where({ id }).first();
};

export const updateEvidence = async (id: number, evidence: Partial<Evidence>): Promise<void> => {
  await db('evidence').where({ id }).update(evidence);
};

export const deleteEvidence = async (id: number): Promise<void> => {
  await db('evidence').where({ id }).delete();
}; 