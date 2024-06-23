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
        <MainImage src={programming} alt="Main이미지" />
      </ImageContainer>
      <TextContainer>
        <SubtitleText>
          어느날 갑자기
          <br className="br-small" /> IT 회사에 들어간 나
        </SubtitleText>
        <MainTitleText>
          어떤 IT 직업을 <br />
          갖게 되었을까요?
        </MainTitleText>
        <p>성격별 IT직종 적합테스트</p>
      </TextContainer>
      <Button variant="fill" onClick={handleTestClick}>
        입사 테스트하기
      </Button>
    </Content>
  );
}

const MainTitleText = styled.span`
  font-size: var(--font-title-size);
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  margin-bottom: var(--margin-medium);
  letter-spacing: -2px;
`;

const SubtitleText = styled.p`
  font-size: var(--font-text-size-26);
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: var(--margin-small);

  .br-small {
    display: none;
  }

  @media only screen and (max-width: 460px) {
    .br-small {
      display: block;
    }
  }
`;
