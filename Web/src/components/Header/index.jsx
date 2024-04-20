import React, { useState } from "react";
import {
  HeaderWrapper,
  Container,
  NavMenu,
  NavItem,
  MobileMenuIcon,
} from "./style";
import Icon from "assets/icons/IconHeader.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollToFooter = () => {
    const Footer = document.querySelector("#Footer");

    Footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <Container>
        <div className="icon">
          <a href="/">
            <img src={Icon} alt="" />
          </a>
        </div>
        <MobileMenuIcon onClick={toggleMenu}>&#9776;</MobileMenuIcon>
        <NavMenu showMenu={showMenu}>
          <NavItem>
            <a href="/">Início</a>
          </NavItem>
          <NavItem>
            <a href="/historia">Minha História</a>
          </NavItem>
          <NavItem>
            <a href="/propostas">Propostas</a>
          </NavItem>
          <NavItem>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToFooter();
              }}
            >
              Contato
            </a>
          </NavItem>
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
