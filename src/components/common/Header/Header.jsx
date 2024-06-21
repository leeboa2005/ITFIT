import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import LogoSvg from '/images/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderWrapper>
      <Logo onClick={handleLogoClick} src={LogoSvg} width={95} height={31} />
      <OpenSideBarButton icon={faBars} onClick={toggleSide} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 28px 40px;
  background: #fff;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const OpenSideBarButton = styled(FontAwesomeIcon)`
  height: 31px;
  cursor: pointer;
`;
