import * as C from './styles'

import mainImage from '../../assets/images/illustra2_Roxa.png'
import { Button } from '../../components/Button';
import { AboutMe } from '../../components/AboutMe';

export const Home = () => {
    return(
        <>
        <C.BannerArea>
            <C.BannerGradient>
                <C.Container>
                    <C.MobileImage src={mainImage} />
                    <C.InfoArea>
                        <C.TextArea>
                            <div className='sub-text'>//Olá, eu sou_</div>
                            <div className='main-text'>Thiago Silva</div>
                            <div className='sub-text'>Desenvolvedor Front-End</div>
                        </C.TextArea>
                        <C.ButtonArea>
                            <Button
                                isALink={true} 
                                icon={'github'} 
                                title={'GitHub'} 
                                link={'https://github.com/ThiagoFang'} 
                            />

                            <Button 
                                isALink={true} 
                                icon={'linkedin'} 
                                title={'Linkedin'} 
                                link={'https://www.linkedin.com/in/thiago-lima-46463715a/'} 
                            />
                        </C.ButtonArea>
                    </C.InfoArea>
                    <C.ImageArea>
                        <img src={mainImage} alt="" />
                    </C.ImageArea>
                </C.Container> 
            </C.BannerGradient>
        </C.BannerArea>

        <AboutMe />
        </>
    );
}