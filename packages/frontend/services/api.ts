import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface Case {
  id: number;
  case_number: string;
  title: string;
  description: string;
  status: string;
  client_name: string;
  opposing_party?: string;
  start_date: string;
  end_date?: string;
}

export const api = {
  cases: {
    getAll: async (): Promise<Case[]> => {
      const { data, error } = await supabase
        .from('cases')
        .select('*');
      
      if (error) throw error;
      return data;
    },

    getById: async (id: number): Promise<Case> => {
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },

    create: async (caseData: Omit<Case, 'id'>): Promise<Case> => {
      const { data, error } = await supabase
        .from('cases')
        .insert(caseData)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },

    update: async (id: number, caseData: Partial<Case>): Promise<Case> => {
      const { data, error } = await supabase
        .from('cases')
        .update(caseData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },

    delete: async (id: number): Promise<void> => {
      const { error } = await supabase
        .from('cases')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
  },
}; 