import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__progress-bar--success {
    background-color: #275cd7 !important;
  }
  .Toastify__progress-bar--error {
    background-color: #d32f2f !important;
  }
  .toastify-icon {
    color: #257dcf;
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  color: #2f71d4;
`;

export const ErrorIcon = styled(FaTimesCircle)`
  color: #f44336;
`;
