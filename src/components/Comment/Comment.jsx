import { useEffect, useState } from 'react';
import styled from 'styled-components';
import supabaseClient from '../../supabase/supabaseClient';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Comment() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Wrapper>
      <CommentForm session={session} />
      <CommentList session={session} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 20px;
`;
