import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements' 

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="kampanya" onClick={toggle}>
                        Kampanya Oluştur
                    </SidebarLink>
                    <SidebarLink to="paketler" onClick={toggle}>
                        Paketler
                    </SidebarLink>
                    <SidebarLink to="sss" onClick={toggle}>
                        S.S.S.
                    </SidebarLink>
                    <SidebarLink to="iletisim" onClick={toggle}>
                        İletişim
                    </SidebarLink>
                    <SidebarLink to="kayit" onClick={toggle}>
                        Kayıt Ol
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/giris'>Giriş Yap</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
