import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonBar = styled.div`
  width: 89%;
  height: 24px;
  background: #f0f0f0;
  background-image: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%);
  background-repeat: no-repeat;
  background-size: 800px 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  animation: ${shimmer} 3s infinite linear;
  border-radius: 10px;

  @media only screen and (max-width: 734px) {
    width: 80%;
  }
`;

export default SkeletonBar;
