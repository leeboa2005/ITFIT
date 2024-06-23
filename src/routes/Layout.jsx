import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header/Header';

const Layout = () => {
  return (
    <Container>
      <Box>
        <Header />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;

  @media only screen and (max-width: 460px) {
    margin: 0;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  min-height: calc(100vh - 50px);
  padding: 105px 40px;
  background: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.12));

  @media only screen and (max-width: 460px) {
    padding: 105px 30px 66px 30px;
    border-radius: 0;
  }
`;
