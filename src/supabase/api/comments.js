import supabaseClient from '../supabaseClient';

export async function getComments() {
  const { data: comments } = await supabaseClient.from('COMMENTS').select();
  return comments;
}

export async function getCommentsByJobPosition(jobPosition) {
  const { data: comments } = await supabaseClient.from('COMMENTS').select().eq('job_position', jobPosition);
  return comments;
}

export async function insertComment(userId, nickname, comment, jobPosition) {
  const { error } = await supabaseClient
    .from('COMMENTS')
    .insert({ user_id: userId, nickname: nickname, comment: comment, job_position: jobPosition });

  if (error) throw new Error(error);
}

export async function updateComment(id, comment) {
  const { error } = await supabaseClient.from('COMMENTS').update({ comment: comment }).eq('id', id);

  if (error) throw new Error(error);
}

export async function deleteComment(id) {
  const { error } = await supabaseClient.from('COMMENTS').delete().eq('id', id);

  if (error) throw new Error(error);
}
