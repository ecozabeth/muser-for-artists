import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements' 

const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkTitle>Powered by muser</FooterLinkTitle>
                <FooterLinkItems>            
                    <FooterLink to="/">Gizlilik Sözleşmesi</FooterLink>
                    <FooterLink to="/">Kullanım Şartları ve Topluluk Kuralları</FooterLink>
                    <FooterLink to="/">Buluşma için Güvenlik İpuçları</FooterLink>
                    <FooterLink to="/">Şartların Özeti</FooterLink>
                    <FooterLink to="/">Tanımlama Bilgisi Politikası</FooterLink>
                    <FooterLink to="/">Spotify Kullanımı Hakkında</FooterLink>
                    <FooterLink to="/">Marka İlkeleri ve Basın Kiti</FooterLink>
                </FooterLinkItems>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer