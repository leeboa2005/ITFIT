import supabaseClient from '../supabaseClient';

export async function getJobPosition() {
  const { data: jobPosition } = await supabaseClient.from('JOB_POSITION').select();
  return jobPosition;
}
