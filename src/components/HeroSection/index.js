import React, {useState} from 'react'
import Video from '../../videos/vide.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Müzik sosyal medyası muser ile şarkılarını müzik severlerin karşısına çıkart.</HeroH1>
                <HeroP>Yeni sanatçısın ve şarkını milyonlarca kez göstermek mi istiyorsun?</HeroP>
                <HeroBtnWrapper>
                    <Button to='kampanya' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Hemen Kampanya Oluştur {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
