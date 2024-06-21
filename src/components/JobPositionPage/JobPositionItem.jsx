import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function JobPositionItem({ item }) {
  const { title, label, highlight, position, imgUrl } = item;

  const navigate = useNavigate();

  const handleMoveDetailPage = () => {
    navigate(`/job-position/${position}`);
  };

  return (
    <ItemWrapper onClick={handleMoveDetailPage}>
      <img src={imgUrl} width={120} height={120} alt="사진" />
      <ItemTextWrapper>
        <ItemLabelText>{label}</ItemLabelText>
        <ItemTitleText>{title}</ItemTitleText>
        <ItemSummaryText>{highlight}</ItemSummaryText>
      </ItemTextWrapper>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  width: 100%;
  min-width: 520px;
  min-height: 160px;

  display: flex;
  gap: 42px;

  box-sizing: border-box;

  padding: 20px 42px;

  border: 1px solid #e5e5e5;
  border-radius: 20px;

  cursor: pointer;
`;

const ItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h3 {
    margin-bottom: 8px;
  }

  & > h2 {
    margin-bottom: 10px;
  }
`;

const ItemLabelText = styled.h3`
  width: 45px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: rgba(90, 106, 251, 0.18);

  font-size: 12px;
  font-weight: bold;
  color: rgb(90, 106, 251);
`;

const ItemTitleText = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const ItemSummaryText = styled.p`
  font-size: 15px;
  color: #6b7280;
`;
