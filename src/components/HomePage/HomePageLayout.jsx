import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import programming from '../../../public/images/programming.png';
import { Button } from '../common/Button/Button';
import { Content, ImageContainer, MainImage, TextContainer } from './HomePageLayout.style';

export default function HomePageLayout() {
  const navigate = useNavigate();
  const handleTestClick = () => {
    navigate('/survey');
  };
  return (
    <Content>
      <ImageContainer>
        <MainImage style={{ height: '300px', width: '300px' }} src={programming} alt="Main이미지" />
      </ImageContainer>
      <TextContainer>
        <T26>어느날 갑자기 IT 회사에 들어간 나</T26>
        <T48b>
          어떤 IT 직업을 <br />
          갖게 되었을까요?
        </T48b>
        <p>성격별 IT직종 적합테스트</p>
      </TextContainer>
      <Button variant="fill" onClick={handleTestClick}>
        입사 테스트하기
      </Button>
    </Content>
  );
}

const T48b = styled.span`
  font-size: 48px;
  font-weight: 800;
  color: #111827;
  margin-bottom: 24px;
  line-height: 110%;
  letter-spacing: -2px;
`;
const T26 = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 6px;
`;
