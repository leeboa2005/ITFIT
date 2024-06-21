import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 600px;
  min-height: calc(100vh - 50px);
  margin: 25px auto;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1));
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CenterTitle = styled.h2`
  text-align: center;
  font-size: 220%;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: medium;
  margin: 20px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 40px;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 10px 0;
    margin-bottom: 50px;
  }

  h2 {
    font-size: 1.25rem;
    margin: 10px 0;
  }

  p {
    font-size: 20px;
    color: #555;
    margin-top: 24px;
    margin-bottom: 60px;
  }
`;

export const TestButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
