import styled from 'styled-components';

export default function JobPositionSummary() {
  return (
    <SummaryWrap>
      <SummaryTitleText>
        <span>IT의 대표적인 직군</span>을 알아보세요
      </SummaryTitleText>
      <SummaryDetailText>IT 직종에는 어떤게 있고 무슨일을 할까요?</SummaryDetailText>
      <SummaryDetailText>대략적인 몇몇 직군에 대해 알아봐요</SummaryDetailText>
    </SummaryWrap>
  );
}

const SummaryWrap = styled.section`
  width: 100%;
  max-width: 388px;
`;

const SummaryTitleText = styled.h1`
  font-size: 48px;
  text-align: center;

  margin-bottom: 20px;

  & > span {
    font-weight: bold;
  }
`;

const SummaryDetailText = styled.p`
  font-size: 20px;
  text-align: center;
  color: #4b5563;
`;
