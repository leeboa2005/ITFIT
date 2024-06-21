import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../asset/font/pretendardvariable.css';
import { JOB_POSITION } from '../../constants';
import Comment from '../Comment/Comment';
import { Button } from '../common/Button/Button';
import VideoDisplay from '../common/VideoDisplay';
import PercentageTable from './PercentageTable';
import SharePage from './SharePage';

export default function ResultPageLayout({ jobPositions, isLoading }) {
  const location = useLocation();
  const result = location.state?.result || 'frontend_developer'; // 임시로 '프론트엔드 개발자' 로 설정
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
      <Title>
        <T26>입사를 축하합니다! 당신의 직군은</T26>
        <T48b>{title}</T48b>
        <T20>{highlight}</T20>
      </Title>
      <TitleImg src={imgUrl} />

      <Section>
        <T20>{detail}</T20>
      </Section>

      <Section>
        <T28>영상으로 보는 직업</T28>
        <VideoDisplay videoId={videoId} width={520} height={285} />
      </Section>

      <PercentageTable jobPositions={jobPositions} isLoading={isLoading} />

      <Section>
        <SharePage />
        <Button onClick={handleRetakeTest}>테스트 다시하기</Button>
      </Section>

      <Comment />
    </>
  );
}

const Section = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: block;

  & > button {
    margin: 5px 0px 0px 0px;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
  display: block;
`;

const TitleImg = styled.img`
  box-sizing: border-box;
  height: auto;
  max-width: 100%;
  vertical-align: bottom;
  margin-bottom: 70px;
`;

//폰트
const T48b = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 52px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #111827;
`;

const T36 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 400;
  color: #333;
`;

const T28 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 14px;
`;

const T26 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #111827;
`;

const T22 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 800;
  color: #111827;
`;

const T20 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 300;
  color: #4b5563;
  text-align: center;
  line-height: 1.2;
`;

const T18 = styled.span`
  display: block;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 200;
  color: #a5a5a5;
`;
