import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { JOB_POSITION } from '../../constants';
import Comment from '../Comment/Comment';
import VideoDisplay from '../common/VideoDisplay';

export default function JobPositionDetail() {
  const params = useParams();

  const { title, highlight, detail, imgUrl, videoId } = useMemo(
    () => JOB_POSITION.filter((v) => v.position === params.position)[0],
    [params.position]
  );

  return (
    <>
      <TitleText>{title}</TitleText>
      <HighlightText>{highlight}</HighlightText>
      <PositionImage src={imgUrl} width={412} height={410} />
      <DetailText>{detail}</DetailText>
      <PositionVideoText>영상으로 보는 직업</PositionVideoText>
      <PositionVideoWrapper>
        <VideoDisplay videoId={videoId} width="100%" height="285px" />
      </PositionVideoWrapper>
      <Comment />
    </>
  );
}

const TitleText = styled.h1`
  font-size: 62px;
  font-weight: bold;

  margin-bottom: 28px;
`;

const HighlightText = styled.h2`
  font-size: 24px;
  color: #4b5563;

  margin-bottom: 70px;
`;

const DetailText = styled.p`
  width: 100%;
  font-size: 20px;
  line-height: 1.2;
  color: #4b5563;

  text-align: center;

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

  border-radius: 20px;
  background: black;

  overflow: hidden;
`;

const PositionImage = styled.img`
  margin-bottom: 80px;
`;
