import db from '../connection';

export interface CaseDetails {
  id?: number;
  case_number: string;
  plaintiff: string;
  defendant: string;
  description: string;
  status: string;
  start_date: Date;
  end_date?: Date;
  notes?: string;
  created_at?: Date;
  updated_at?: Date;
}

export const createCaseDetails = async (caseDetails: CaseDetails): Promise<number> => {
  const [id] = await db('case_details').insert(caseDetails);
  return id;
};

export const getCaseDetails = async (): Promise<CaseDetails | undefined> => {
  return db('case_details').first();
};

export const updateCaseDetails = async (id: number, caseDetails: Partial<CaseDetails>): Promise<void> => {
  await db('case_details').where({ id }).update(caseDetails);
};

export const deleteCaseDetails = async (id: number): Promise<void> => {
  await db('case_details').where({ id }).delete();
}; 