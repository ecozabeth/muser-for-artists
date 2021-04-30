import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>muser for Artists</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='kampanya' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Kampanya Oluştur</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='paketler' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Paketler</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='sss' smooth={true} duration={500} spy={true} exact='true' offset={-80}>S.S.S.</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='iletisim' smooth={true} duration={500} spy={true} exact='true' offset={-80}>İletişim</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='kayit'>Kayıt Ol</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/giris'>Giriş Yap</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
