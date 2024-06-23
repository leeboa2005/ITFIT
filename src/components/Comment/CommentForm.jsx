import { useMutation } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { signInAnonymously } from '../../supabase/api/auth';
import { SuccessIcon } from '../ResultPage/SharePage.style';
import useCommentMutation from './hooks/mutation/useCommentMutation';

export default function CommentForm({ session }) {
  const { position } = useParams();

  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');

  const { mutateAsync: signIn } = useMutation({
    mutationFn: () => signInAnonymously()
  });

  const { createComment } = useCommentMutation();

  const isValidated = useMemo(() => !!(nickname && comment), [comment, nickname]);

  async function handleSignInAnonymously(e) {
    e.preventDefault();

    if (!isValidated) return;

    if (session) {
      await createComment({
        userId: session.user.id,
        nickname: nickname,
        comment: comment,
        jobPosition: position
      });
      setNickname('');
      setComment('');
    } else {
      const { user } = await signIn();
      await createComment({
        userId: user.id,
        nickname: nickname,
        comment: comment,
        jobPosition: position
      });
      setNickname('');
      setComment('');
    }

    toast.success('코멘트가 등록되었습니다 :)', {
      position: 'top-center',
      icon: <SuccessIcon />,
      progressClassName: 'Toastify__progress-bar--success'
    });
  }

  return (
    <CommentFormBackground>
      <CommentFormWrapper onSubmit={handleSignInAnonymously}>
        <NicknameInput
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <CommentTextarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="내용을 입력해주세요."
        />
        <SubmitButton disabled={!isValidated}>코멘트 남기기</SubmitButton>
      </CommentFormWrapper>
    </CommentFormBackground>
  );
}

const CommentFormBackground = styled.div`
  width: calc(100% + 80px);
  margin: 0px -40px;
  background-color: #fafafa;
`;

const CommentFormWrapper = styled.form`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0px 40px;
  padding: 0;
`;

const NicknameInput = styled.input`
  height: 56px;
  padding: 0px 30px;
  border: 1px solid #d7d7d7;
  border-radius: var(--border-radius);
  font-size: var(--font-text-size-20);
  outline: none;

  &::placeholder {
    color: var(--text-gray-color-2);
  }
`;

const CommentTextarea = styled.textarea`
  height: 120px;
  padding: 24px 30px;
  border: 1px solid #d7d7d7;
  border-radius: var(--border-radius);
  font-size: var(--font-text-size-20);
  outline: none;

  &::placeholder {
    color: var(--text-gray-color-2);
  }
`;

const SubmitButton = styled.button`
  height: 54px;
  border-radius: 17px;

  border: none;

  font-size: var(--font-text-size-24);
  font-weight: var(--font-weight-semi-bold);
  color: white;
  background: var(--main-color);
  transition: all 0.3s ease-in-out;

  &:disabled {
    background: #d7d7d7;
  }
`;
