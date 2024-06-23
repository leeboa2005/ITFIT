import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBar = ({ isOpen, setIsOpen }) => {
  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Overlay onClick={closeSideBar}></Overlay>}
      <SidebarContainer $isOpen={isOpen}>
        <SidebarList>
          <StyledFontAwesomeIcon onClick={closeSideBar} icon={faAnglesRight} />
          <li>
            <SidebarLink to="/" onClick={closeSideBar}>
              IT 입사 테스트 하기
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to="/job-position" onClick={closeSideBar}>
              IT 직군 알아보기
            </SidebarLink>
          </li>
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default SideBar;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.$isOpen ? '0' : '-300px')};
  width: 300px;
  min-height: calc(100vh - 50px);
  padding: 28px 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 1000;
`;

const SidebarList = styled.ul`
  & > li {
    padding: 14px 0px;
    margin-bottom: 22px;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-bottom: 63px;
  height: 31px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 460px) {
    height: 25px;
  }
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-text-size-24);
  color: var(--text-color);
`;
