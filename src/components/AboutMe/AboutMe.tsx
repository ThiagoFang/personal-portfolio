import { SectionTitle } from '../SectionTitle';
import * as C from './styles';

import TechIcon from '../../assets/icons/tech_purple.png'
import BadgeIcon from '../../assets/icons/badge_purple.png'
import ServiceIcon from '../../assets/icons/service_purple.png'
import { Button } from '../Button';

export const AboutMe = () => {
    return(
        <C.Container>
            <SectionTitle title='Sobre Mim' subtitle='About Me'/>

            <C.AboutArea>
                <C.AboutPhoto>
                    <C.PhotoArea></C.PhotoArea>
                </C.AboutPhoto>
                <C.InfoArea>
                    <C.SquaresArea>
                        <C.Square>
                            <C.SquareIcon src={TechIcon}/>
                            <C.SquareTitle>Conhecimento</C.SquareTitle>
                            <C.SquareSubTitle>5 + Tecnologias</C.SquareSubTitle>
                        </C.Square>

                        <C.Square>
                            <C.SquareIcon src={BadgeIcon} />
                            <C.SquareTitle>Completei</C.SquareTitle>
                            <C.SquareSubTitle>12 + Projetos</C.SquareSubTitle>
                        </C.Square>

                        <C.Square>
                            <C.SquareIcon src={ServiceIcon}/>
                            <C.SquareTitle>Disponivel</C.SquareTitle>
                            <C.SquareSubTitle>A qualquer momento</C.SquareSubTitle>
                        </C.Square>
                    </C.SquaresArea>
                    <C.AboutText>
                        Olá! Meu nome é <span>Thiago Silva</span>, também conhecido como <span>Fang</span>, sou apaixonado por técnologia 
                        desde pequeno, meu primeiro contato com programação foi no ensino fundamental onde tentei criar a minha própria versão 
                        de um jogo que eu jogava muito.<br/><br/>
                        
                        Após me formar como designer, tive mais contato com a parte de programação e percebi era o que eu realmente 
                        amava, é o espaço onde posso sempre <span>aprender coisas novas e sentir que faço parte do futuro</span>, escolhi atuar no 
                        Front-End pois mistura programação com design, procuro me desenvolver todos os dias, conhecer novas tecnologias 
                        e recursos deste âmbito profissional.
                    </C.AboutText>
                    <C.ButtonsArea>
                        <Button
                            isALink={true}
                            link="https://drive.google.com/drive/folders/1UAOnXYuI-NMZW0B8O1Z3PDIG7_yoDi9S?usp=sharing"
                            title='Currículo'
                            icon='download'
                        />
                        <Button
                            isALink={false}
                            path='projects'
                            title='Projetos'
                            icon='paper'
                        />
                    </C.ButtonsArea>
                </C.InfoArea>
            </C.AboutArea>
        </C.Container>
    );
}