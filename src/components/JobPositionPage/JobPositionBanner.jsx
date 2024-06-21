import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../common/Button';

export default function JobPositionBanner() {
  const navigate = useNavigate();
  return (
    <Wrap>
      <BannerText>
        <span>나에게 맞는 직군</span>을 알아보고 싶다면?
      </BannerText>
      <BannerButton
        variant="fill"
        onClick={() => {
          navigate('/survey');
        }}
      >
        입사 테스트하기
      </BannerButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: calc(100% + 80px);
  height: 390px;
  background-color: rgba(90, 138, 251, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  margin-top: 70px;
`;

const BannerText = styled.p`
  width: 360px;
  text-align: center;
  font-size: 48px;

  & > span {
    font-weight: bold;
  }
`;

const BannerButton = styled(Button)``;
