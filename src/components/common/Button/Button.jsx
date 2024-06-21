import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../../../asset/font/pretendardvariable.css';

const Button = forwardRef(
  (
    {
      className,
      type = 'button',
      variant = 'default',
      size = 'default',
      fullWidth = false,
      rounded = false,
      href,
      ...props
    },
    ref
  ) => {
    const StyledComponent = href ? StLink : StButton;
    const buttonProps = href ? { to: href, ...props } : { type, ...props };

    return (
      <StyledComponent
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $rounded={rounded}
        {...buttonProps}
      />
    );
  }
);

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 16px;
  font-family: 'Pretendard';
  font-weight: 600;
  color: #5a6afb;
  border: 1px solid #8b97ff;
  transition: 0.15s ease-in-out;
  max-width: 520px;
  min-width: 380px;
  cursor: pointer;
  margin: 5px;
`;

const variantStyles = {
  default: css`
    background-color: var(--color-secondary);
    font-size: 22px;
    color: #5a6afb; /* 글자 색상 변경 */
    border: 2px solid #8b97ff;
    height: 66px;
    font-weight: bold;
    &:hover {
      background-color: #dadeff;
    }
  `,
  fill: css`
    background-color: #5a6afb;
    height: 66px;
    font-size: 22px;
    border: none;
    color: #ffffff;
    &:hover {
      background-color: #4956cb;
    }
  `,
  choice: css`
    background-color: #ffffff;
    height: 60px;
    color: #5a6afb;
    padding-left: 40px;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    &:hover {
      background-color: #dadeff;
    }
  `
};

const sizeStyles = {
  default: css`
    width: 100%;
    padding: 10px 24px;
  `
};

const StButton = styled.button`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

const StLink = styled(Link)`
  ${baseStyles}
  ${(props) => variantStyles[props.$variant] || variantStyles.default}
  ${(props) => sizeStyles[props.$size] || sizeStyles.default}
  ${(props) => props.$fullWidth && 'width: 100%;'}
  ${(props) => props.$rounded && 'border-radius: 25px;'}
`;

Button.displayName = 'Button';

export { Button };
