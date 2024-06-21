import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Providers from './Providers';
import './asset/font/pretendardvariable.css';
import { StyledToastContainer } from './components/ResultPage/SharePage.style';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <GlobalStyles />
    <Router />
    <StyledToastContainer autoClose={3000} />
  </Providers>
);
