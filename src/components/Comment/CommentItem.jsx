import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { SuccessIcon } from '../ResultPage/SharePage.style';
import useCommentMutation from './hooks/mutation/useCommentMutation';

export default function CommentItem({ commentItem, session }) {
  const { id, nickname, comment, user_id } = commentItem;

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const { editComment, removeComment } = useCommentMutation();

  async function handleEditComment() {
    await editComment({ id, comment: editedComment });
    toast.success('수정이 완료되었습니다 :)', {
      position: 'top-center',
      icon: <SuccessIcon />,
      progressClassName: 'Toastify__progress-bar--success'
    });
    setIsEditMode(false);
  }

  async function handleDeleteComment() {
    await removeComment({ id });
    toast.success('삭제가 완료되었습니다 :)', {
      position: 'top-center',
      icon: <SuccessIcon />,
      progressClassName: 'Toastify__progress-bar--success'
    });
  }

  return (
    <ItemWrapper>
      <ItemHeadWrapper>
        <ItemNicknameText>{nickname}</ItemNicknameText>
        {session?.user.id === user_id && (
          <div>
            <ItemActionButton onClick={isEditMode ? handleEditComment : () => setIsEditMode(true)}>
              {isEditMode ? '확인' : '수정'}
            </ItemActionButton>
            <hr />
            <ItemActionButton onClick={handleDeleteComment}>삭제</ItemActionButton>
          </div>
        )}
      </ItemHeadWrapper>
      {isEditMode ? (
        <ItemEditInput type="text" value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
      ) : (
        <ItemCommentText>{editedComment}</ItemCommentText>
      )}
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 32px 0px;

  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

const ItemHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & > div > hr {
    width: 2px;
    height: 14px;
    background: #d3d3d3;
    border: none;
  }
`;

const ItemActionButton = styled.button`
  width: 52px;
  height: 31px;
  border: none;

  font-size: 18px;
  color: #a5a5a5;

  background: none;

  cursor: pointer;
`;

const ItemNicknameText = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const ItemCommentText = styled.p`
  font-size: 20px;
  color: #4b5563;
`;

const ItemEditInput = styled.input`
  width: 100%;
  min-height: 56px;
  padding: 0px 24px;

  font-size: 20px;

  border: 1px solid #e5e5e5;
  border-radius: 14px;

  outline: none;
`;
