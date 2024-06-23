import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -520px 0;
  }
  100% {
    background-position: 520px 0;
  }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  background-image: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%);
  background-repeat: no-repeat;
  background-size: 1040px 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  animation: ${shimmer} 3s infinite linear;

  @media only screen and (max-width: 734px) {
    width: 90%;
    height: auto;
  }
`;

export default SkeletonBox;
