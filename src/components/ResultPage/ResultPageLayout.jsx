import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../asset/font/pretendardvariable.css';
import { JOB_POSITION } from '../../constants';
import Comment from '../Comment/Comment';
import { Button } from '../common/Button/Button';
import VideoDisplay from '../common/VideoDisplay';
import PercentageTable from './PercentageTable';
import SharePage from './SharePage';

export default function ResultPageLayout({ jobPositions, isLoading, setIsLoading }) {
  const location = useLocation();
  const result = location.state?.result || 'frontend_developer';
  const navigate = useNavigate();

  function handleRetakeTest() {
    navigate('/Survey');
  }

  const { title, highlight, detail, imgUrl, videoId } = useMemo(
    () => JOB_POSITION.filter((v) => v.position === result)[0],
    [result]
  );

  return (
    <>
      <ResultTitleContainer>
        <ResultSubtitle>입사를 축하합니다! 당신의 직군은</ResultSubtitle>
        <ResultMainTitle>{title}</ResultMainTitle>
        <ResultHighlightText>{highlight}</ResultHighlightText>
      </ResultTitleContainer>
      <ResultTitleImage src={imgUrl} />

      <ResultSection>
        <ResultDetailText>{detail}</ResultDetailText>
      </ResultSection>

      <ResultSection>
        <ResultSectionTitle>영상으로 보는 직업</ResultSectionTitle>
        <VideoDisplay videoId={videoId} width={520} height={285} />
      </ResultSection>

      <PercentageTable jobPositions={jobPositions} isLoading={isLoading} />

      <ResultSection>
        <SharePage />
        <ButtonWrap>
          <Button onClick={handleRetakeTest}>테스트 다시하기</Button>
        </ButtonWrap>
      </ResultSection>

      <Comment />
    </>
  );
}

const ResultSection = styled.div`
  width: 100%;
  margin-bottom: var(--margin-medium);

  & > button {
    margin: 5px 0 0 0;
  }
`;

const ResultTitleContainer = styled.div`
  width: 100%;
  text-align: var(--text-center);
  margin-bottom: var(--margin-large);
  margin-top: var(--margin-large);
  color: var(--text-color);
`;

const ResultTitleImage = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  margin-bottom: var(--margin-large);
`;

const ResultMainTitle = styled.p`
  font-size: var(--font-title-size);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--margin-medium);
`;

const ResultSubtitle = styled.p`
  font-size: var(--font-text-size-24);
  font-weight: var(--font-weight-semi-bold);
  margin-bottom: var(--margin-small);
`;

const ResultSectionTitle = styled.p`
  font-size: var(--font-text-size-28);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--margin-medium);
`;

const ResultHighlightText = styled.p`
  font-size: var(--font-text-size-20);
  font-weight: var(--font-weight-light);
  color: var(--text-gray-color);
`;

const ResultDetailText = styled.p`
  text-align: var(--text-center);
  font-size: var(--font-text-size-20);
  font-weight: var(--font-weight-light);
  color: var(--text-gray-color);
  margin-bottom: var(--margin-medium);
  line-height: 1.3;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
