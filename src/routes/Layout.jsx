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
`;

const Box = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 30px;

  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  max-width: 600px;
  min-height: calc(100vh - 50px);

  padding: 96px 40px;

  background: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.12));
`;
