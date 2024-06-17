import supabaseClient from '../supabaseClient';

export async function getComments() {
  const { data: comments } = await supabaseClient.from('COMMENTS').select();
  return comments;
}

export async function getCommentsByJobPosition(jobPosition) {
  const { data: comments } = await supabaseClient.from('COMMENTS').select().eq('jobPosition', jobPosition);
  return comments;
}
