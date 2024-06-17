import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import Providers from './Providers';
import Router from './routes/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <Router />
    <GlobalStyles />
  </Providers>
);
