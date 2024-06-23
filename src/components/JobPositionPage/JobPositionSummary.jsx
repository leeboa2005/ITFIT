import styled from 'styled-components';

export default function JobPositionSummary() {
  return (
    <SummaryWrap>
      <SummaryTitleText>
        <span>IT의 대표적인 직군</span>을 알아보세요
      </SummaryTitleText>
      <SummaryDetailText>
        IT 직종에는 어떤게 있고
        <br className="small" /> 무슨일을 할까요?
      </SummaryDetailText>
      <SummaryDetailText>대략적인 몇몇 직군에 대해 알아봐요</SummaryDetailText>
    </SummaryWrap>
  );
}

const SummaryWrap = styled.section`
  width: 100%;
  max-width: 388px;
`;

const SummaryTitleText = styled.h1`
  font-size: var(--font-title-size);
  text-align: center;
  margin-bottom: 20px;

  & > span {
    font-weight: bold;
  }

  br.small {
    display: none;

    @media only screen and (max-width: 460px) {
      display: block;
    }
  }
`;

const SummaryDetailText = styled.p`
  font-size: var(--font-text-size-20);
  text-align: center;
  color: #4b5563;
  margin-bottom: 5px;
  line-height: 1.3;
`;
