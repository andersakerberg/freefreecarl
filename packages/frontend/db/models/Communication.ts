import db from '../connection';

export interface Communication {
  id?: number;
  type: string;
  direction: string;
  content: string;
  date: Date;
  participants?: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createCommunication = async (communication: Communication): Promise<number> => {
  const [id] = await db('communications').insert(communication);
  return id;
};

export const getCommunications = async (): Promise<Communication[]> => {
  return db('communications').select('*').orderBy('date', 'desc');
};

export const getCommunicationById = async (id: number): Promise<Communication | undefined> => {
  return db('communications').where({ id }).first();
};

export const updateCommunication = async (id: number, communication: Partial<Communication>): Promise<void> => {
  await db('communications').where({ id }).update(communication);
};

export const deleteCommunication = async (id: number): Promise<void> => {
  await db('communications').where({ id }).delete();
}; 