import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobPositionDetail from '../components/JobPositionPage/JobPositionDetail';
import HomePage from '../pages/HomePage/HomePage';
import JobPositionPage from '../pages/JobPositionPage/JobPositionPage';
import ResultPage from '../pages/ResultPage/ResultPage';
import SurveyPage from '../pages/SurveyPage/SurveyPage';
import Layout from './Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-position" element={<JobPositionPage />} />
          <Route path="/job-position/:position" element={<JobPositionDetail />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/result/:position" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
