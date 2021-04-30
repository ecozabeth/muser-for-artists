import React from 'react'
import Icon1 from '../../images/data_3.svg'
import Icon2 from '../../images/data_4.svg'
import Icon3 from '../../images/data_1.svg'
import { PaketContainer, PaketH1, PaketWrapper, PaketCard, PaketIcon, PaketH2, PaketH3, PaketP } from './paketlerElements'

const Paketler = () => {
    return (
        <PaketContainer id="paketler">
            <PaketH1>muser for Artists Paketleri</PaketH1>
            <PaketWrapper>
                <PaketCard>
                    <PaketIcon src={Icon1}/>
                    <PaketH2>Start Level</PaketH2>
                    <PaketH3>Ne Kadar Tıklanacak</PaketH3>
                    <PaketP>x.000 muser Şarkı Tıklaması</PaketP>
                    <PaketH3>Nerede Gösterilecek</PaketH3>
                    <PaketP>muser Keşfet</PaketP>
                    <PaketH3>Tahmini Spotify Streami</PaketH3>
                    <PaketP>x.000</PaketP>
                </PaketCard>
                <PaketCard>
                    <PaketIcon src={Icon2}/>
                    <PaketH2>Medium Level</PaketH2>
                    <PaketH3>Ne Kadar Tıklanacak</PaketH3>
                    <PaketP>x.000 muser Şarkı Tıklaması</PaketP>
                    <PaketH3>Nerede Gösterilecek</PaketH3>
                    <PaketP>muser Keşfet - Sosyal</PaketP>
                    <PaketH3>Tahmini Spotify Streami</PaketH3>
                    <PaketP>x.000</PaketP>
                </PaketCard>
                <PaketCard>
                    <PaketIcon src={Icon3}/>
                    <PaketH2>High Level</PaketH2>
                    <PaketH3>Ne Kadar Tıklanacak</PaketH3>
                    <PaketP>x.000 muser Şarkı Tıklaması</PaketP>
                    <PaketH3>Nerede Gösterilecek</PaketH3>
                    <PaketP>muser Keşfet - Sosyal - Hareket</PaketP>
                    <PaketH3>Tahmini Spotify Streami</PaketH3>
                    <PaketP>x.000</PaketP>
                </PaketCard>
            </PaketWrapper>
        </PaketContainer>
    )
}

export default Paketler
