import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #1a7699;
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
    width: 75%;
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

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #d4cfcf;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
