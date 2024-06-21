import supabaseClient from '../supabaseClient';
export async function getJobPosition() {
  const { data: jobPosition, error } = await supabaseClient
    .from('JOB_POSITION')
    .select('type, type_name, counter')
    .order('counter', { ascending: false });
  if (error) {
    console.error('Error fetching job positions:', error);
    return [];
  }
  return jobPosition;
}
