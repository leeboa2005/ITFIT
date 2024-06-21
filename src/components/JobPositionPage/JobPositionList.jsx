import styled from 'styled-components';
import { JOB_POSITION } from '../../constants';
import JobPositionItem from './JobPositionItem';

export default function JobPositionList() {
  return (
    <JobPositionListWrap>
      {JOB_POSITION.map((item) => (
        <JobPositionItem key={item.title} item={item} />
      ))}
    </JobPositionListWrap>
  );
}

const JobPositionListWrap = styled.ul`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
