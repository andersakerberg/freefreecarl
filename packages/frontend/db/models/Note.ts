import db from '../connection';

export interface Note {
  id?: number;
  title: string;
  content: string;
  category?: string;
  date: Date;
  is_private: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export const createNote = async (note: Note): Promise<number> => {
  const [id] = await db('notes').insert(note);
  return id;
};

export const getNotes = async (): Promise<Note[]> => {
  return db('notes').select('*').orderBy('date', 'desc');
};

export const getNoteById = async (id: number): Promise<Note | undefined> => {
  return db('notes').where({ id }).first();
};

export const updateNote = async (id: number, note: Partial<Note>): Promise<void> => {
  await db('notes').where({ id }).update(note);
};

export const deleteNote = async (id: number): Promise<void> => {
  await db('notes').where({ id }).delete();
}; 