import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { JOB_POSITION } from '../../constants';
import Comment from '../Comment/Comment';
import VideoDisplay from '../common/VideoDisplay';

export default function JobPositionDetail() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { title, highlight, detail, imgUrl, videoId } = useMemo(
    () => JOB_POSITION.filter((v) => v.position === params.position)[0],
    [params.position]
  );

  useEffect(() => {
    setIsLoading(true);
  }, [videoId]);

  return (
    <>
      <TitleText>{title}</TitleText>
      <HighlightText>{highlight}</HighlightText>
      <PositionImage src={imgUrl} width={412} height={410} />
      <DetailText>{detail}</DetailText>
      <PositionVideoText>영상으로 보는 직업</PositionVideoText>
      <PositionVideoWrapper>
        <VideoDisplay videoId={videoId} width="100%" height="285px" isLoading={isLoading} setIsLoading={setIsLoading} />
      </PositionVideoWrapper>
      <Comment />
    </>
  );
}

const TitleText = styled.h1`
  font-size: var(--font-title-size);
  font-weight: var(--font-weight-bold);
  text-align: var(--text-center);
  margin-bottom: var(--margin-medium);
`;
const HighlightText = styled.h2`
  font-size: var(--font-text-size-24);
  color: var(--text-gray-color);
  text-align: var(--text-center);
  margin-bottom: var(--margin-large);
`;

const DetailText = styled.p`
  width: 100%;
  font-size: 20px;
  text-align: var(--text-center);
  color: var(--text-gray-color);
  text-align: var(--text-center);
  margin-bottom: 70px;
`;

const PositionVideoText = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
`;

const PositionVideoWrapper = styled.div`
  width: 100%;
  height: 285px;
  overflow: hidden;
`;

const PositionImage = styled.img`
  margin-bottom: 80px;
`;
