import { useState } from 'react';
import styled from 'styled-components';
import SkeletonBar from '../common/Skeleton/Bar';
import SkeletonCircle from '../common/Skeleton/Circle';
// 탑3 전체 영역
const JobPositionTableWrap = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto 30px auto;

  @media only screen and (max-width: 360px) {
    min-width: 260px;
    width: 100%;
  }
`;
// 탑3 타이틀
const JobPositionTitle = styled.h1`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-text-size-28);
  margin-top: var(--margin-medium);
  margin-bottom: var(--margin-small);
  color: #111827;
`;
// 탑3 리스트
const JobPositionRanking = styled.ul`
  margin-bottom: var(--margin-small);
`;
const JobItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 20px;

  &:last-child {
    border-bottom: none;
  }

  .job-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .job-names {
    display: flex;
    flex-wrap: wrap;

    span {
      font-weight: var(--font-weight-bold);
      margin-right: 5px;
    }
  }

  .job-rank {
    display: flex;
    align-items: center;
    margin-right: 10px;

    @media only screen and (max-width: 360px) {
      margin-right: 5px;
    }
  }

  span {
    color: #585858;
    font-weight: var(--font-weight-medium);
  }
`;

const JobNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    margin-right: 5px;
    font-weight: 400;
    color: var(--text-color);
  }

  @media only screen and (max-width: 420px) {
    max-width: 180px;
  }

  @media only screen and (max-width: 360px) {
    max-width: 160px;
  }
`;

const JobItemNumber = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  div {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #d9dcf9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    span {
      font-size: 17px;
      font-weight: 700;
      color: var(--main-color);
    }
    @media only screen and (max-width: 734px) {
      margin-right: 10px;
    }
  }
`;

// 순위에 직군이 2개 이상일때 더보기 버튼
const MoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  font-size: 14px;
`;
function PercentageTable({ jobPositions, isLoading }) {
  // 더보기 버튼 상태 관리
  const [showMore, setShowMore] = useState({});
  // 더보기 버튼 토글 함수
  const toggleShowMore = (rank) => {
    setShowMore((prevState) => ({
      ...prevState,
      [rank]: !prevState[rank]
    }));
  };
  // 직군별 합계 계산
  const total = jobPositions.reduce((sum, item) => sum + item.counter, 0);
  // 비율 계산 함수
  const calculatePercentage = (value) => {
    return total ? Math.round((value / total) * 100) : 0;
  };
  // 정렬된 직군들을 순위 매김
  const rankedPositions = jobPositions.reduce((acc, item, index, array) => {
    const prev = array[index - 1];
    item.rank = prev && item.counter === prev.counter ? prev.rank : index + 1;
    acc.push(item);
    return acc;
  }, []);
  // 중복 순위가 있을 경우 하나의 영역에 합쳐서 표시
  const groupedPositions = rankedPositions.reduce((acc, item) => {
    acc[item.rank] = acc[item.rank] ? [...acc[item.rank], item] : [item];
    return acc;
  }, {});
  // 상위 3개의 순위만 표시
  const topJobPositions = Object.keys(groupedPositions).slice(0, 3);
  // 비율 계산
  const percentages = topJobPositions.map((rank) => {
    return calculatePercentage(groupedPositions[rank][0].counter);
  });
  return (
    <JobPositionTableWrap>
      <JobPositionTitle>가장 많이 나온 직군 TOP 3</JobPositionTitle>
      <JobPositionRanking>
        {isLoading
          ? Array.from({ length: 3 }, (_, index) => (
              <JobItem key={index}>
                <JobItemNumber>
                  <SkeletonCircle />
                </JobItemNumber>
                <SkeletonBar />
              </JobItem>
            ))
          : topJobPositions.map((rank, index) => (
              <JobItem key={rank}>
                <div className="job-info">
                  <JobItemNumber>
                    <div>
                      <span>{index + 1}</span>
                    </div>
                  </JobItemNumber>
                  <JobNames>
                    {groupedPositions[rank]
                      .slice(0, showMore[rank] ? groupedPositions[rank].length : 2)
                      .map((item, itemIndex) => (
                        <span key={itemIndex}>
                          {item.type_name}
                          {itemIndex < groupedPositions[rank].length - 1 && ','}
                        </span>
                      ))}
                    {groupedPositions[rank].length > 2 && (
                      <MoreButton onClick={() => toggleShowMore(rank)}>
                        {showMore[rank] ? '숨기기' : '더보기'}
                      </MoreButton>
                    )}
                  </JobNames>
                </div>
                <span>{percentages[topJobPositions.indexOf(rank)]}%</span>
              </JobItem>
            ))}
      </JobPositionRanking>
    </JobPositionTableWrap>
  );
}
export default PercentageTable;
