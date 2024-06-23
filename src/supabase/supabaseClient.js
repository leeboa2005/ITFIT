import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

console.log('Supabase URL:', VITE_SUPABASE_URL);
console.log('Supabase Key:', VITE_SUPABASE_KEY);

if (!VITE_SUPABASE_URL || !VITE_SUPABASE_KEY) {
  throw new Error('Supabase URL and Key must be provided.');
}

const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export default supabaseClient;
