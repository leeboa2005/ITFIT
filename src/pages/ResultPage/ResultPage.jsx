import { useEffect, useState } from 'react';
import { getJobPosition } from '../../supabase/api/jopPosition';
import ResultPageLayout from '../../components/ResultPage/ResultPageLayout';

export default function ResultPage() {
  const [jobPositions, setJobPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedPositions = await getJobPosition();
      setJobPositions(fetchedPositions);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return <ResultPageLayout jobPositions={jobPositions} isLoading={isLoading} />;
}
