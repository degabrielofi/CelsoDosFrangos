import React, { useState } from "react";
import {
  HeaderWrapper,
  Container,
  NavMenu,
  NavItem,
  SubMenu,
  SubMenuItem,
  MobileMenuIcon,
} from "./style";
import Icon from "assets/icons/IconHeader.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderWrapper>
      <Container>
        <div className="icon">
          <img src={Icon} alt="" />
        </div>
        <MobileMenuIcon onClick={toggleMenu}>&#9776;</MobileMenuIcon>
        <NavMenu showMenu={showMenu}>
          <NavItem>Inicio</NavItem>
          <NavItem>Minha História</NavItem>
          <NavItem onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            Mandato
            <SubMenu>
              <SubMenuItem>Leis sancionadas</SubMenuItem>
              <SubMenuItem>Projetos de lei</SubMenuItem>
            </SubMenu>
          </NavItem>
          <NavItem>Propostas</NavItem>
          <NavItem>Contato</NavItem>
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
