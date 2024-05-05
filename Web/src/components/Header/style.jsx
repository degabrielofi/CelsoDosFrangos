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

  @media screen and (max-width: 768px) {
    .icon {
      width: 25%;
    }
  }
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 568px) {
    flex-direction: column;
    position: absolute;
    top: ${({ showMenu }) => (showMenu ? "10%" : "-100%")};
    left: 0;
    width: 100%;
    background-color: #1a7699;
    transition: top 0.3s ease;
    z-index: 999;
  }

  @media screen and (min-width: 568px) and (max-width: 992px) {
    top: ${({ showMenu }) => (showMenu ? "20%" : "-100%")};
    flex-direction: column;
    position: absolute;
    left: 0;
    width: 100%;
    background-color: #1a7699;
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
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;

    div {
      height: 5px;
      width: 30px;
      margin: 6px;
      background-color: #fff;
      transition-duration: 0.3s;
    }

    .toggleMenu.active .line1 {
      transform: rotate(45deg) translate(7px, 7px);
      background-color: #fff;
    }

    .toggleMenu.active .line2 {
      opacity: 0;
    }

    .toggleMenu.active .line3 {
      transform: rotate(-45deg) translate(8px, -9px);
      background-color: #fff;
    }
  }
`;
