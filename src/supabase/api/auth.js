import supabaseClient from '../supabaseClient';

export async function signInAnonymously() {
  const { data } = await supabaseClient.auth.signInAnonymously();

  return data;
}
