import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #43dd64;
  color: #fff;
  padding: 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 10%;
  }

  .icon img {
    width: 70%;
  }
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: ${({ showMenu }) => (showMenu ? "80px" : "-100%")};
    left: 0;
    width: 100%;
    background-color: #333;
    transition: top 0.3s ease;
    z-index: 999;
  }
`;

export const NavItem = styled.li`
  margin-left: 20px;
  font-size: 18px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  padding: 10px 0;
  z-index: 999;

  ${NavItem}:hover & {
    display: block;
  }
`;

export const SubMenuItem = styled.li`
  font-size: 16px;
  padding: 10px 20px;
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
