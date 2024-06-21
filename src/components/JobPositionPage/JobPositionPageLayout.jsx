import JobPositionBanner from './JobPositionBanner';
import JobPositionList from './JobPositionList';
import JobPositionSummary from './JobPositionSummary';

export default function JobPositionPageLayout() {
  return (
    <>
      <JobPositionSummary />
      <JobPositionList />
      <JobPositionBanner />
    </>
  );
}
