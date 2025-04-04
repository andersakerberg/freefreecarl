import db from '../connection';

export interface TimelineEvent {
  id?: number;
  title: string;
  description: string;
  date: Date;
  category: string;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createTimelineEvent = async (event: TimelineEvent): Promise<number> => {
  const [id] = await db('timeline_events').insert(event);
  return id;
};

export const getTimelineEvents = async (): Promise<TimelineEvent[]> => {
  return db('timeline_events').select('*').orderBy('date', 'desc');
};

export const getTimelineEventById = async (id: number): Promise<TimelineEvent | undefined> => {
  return db('timeline_events').where({ id }).first();
};

export const updateTimelineEvent = async (id: number, event: Partial<TimelineEvent>): Promise<void> => {
  await db('timeline_events').where({ id }).update(event);
};

export const deleteTimelineEvent = async (id: number): Promise<void> => {
  await db('timeline_events').where({ id }).delete();
}; 