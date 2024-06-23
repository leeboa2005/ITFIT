import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 600px;
  min-height: calc(100vh - 50px);
  margin: var(--margin-medium) auto;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-color);
  filter: drop-shadow(var(--box-shadow));
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: var(--text-center);
`;

export const CenterTitle = styled.h2`
  text-align: var(--text-center);
  font-size: 220%;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--margin-small);
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: var(--font-text-size-20);
  margin: var(--margin-small);
`;

export const ImageContainer = styled.div`
  margin-top: var(--margin-small);
  margin-bottom: var(--margin-medium);
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

export const TextContainer = styled.div`
  h1 {
    font-size: var(--font-subtitle-size);
    margin: var(--margin-small) 0;
    margin-bottom: var(--margin-large);
  }

  h2 {
    font-size: var(--font-text-size-26);
    margin: var(--margin-small) 0;
  }

  p:first-child {
    font-size: var(--font-text-size-24);
    margin-top: var(--margin-medium);
    margin-bottom: 7px;
  }

  p:last-child {
    font-size: var(--font-text-size-20);
    margin-top: var(--margin-medium);
    margin-bottom: calc(var(--margin-large));
    color: var(--text-gray-color);
  }
`;

export const TestButton = styled.button`
  margin-top: var(--margin-medium);
  width: 100%;
  padding: var(--margin-small);
  font-size: var(--font-text-size-20);
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;
