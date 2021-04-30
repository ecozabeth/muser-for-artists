import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FooterContainer = styled.div`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
`

export const FooterLinkTitle = styled.h1`
    color: #fff;
    font-size: 16px;
    margin-bottom: 16px;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1300px;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`