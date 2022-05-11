import * as C from './styles'

import { ProjectsType } from '../../data/Projects';
import { Button } from '../Button';

export const ProjectBox = ({name,description,links,techs,url}:ProjectsType) => { 

    return(
        <C.Container>
            <C.ImageArea>
                <img src={require(`../../assets/projects_prints/${url}_print.jpg`)} alt="" />
            </C.ImageArea>
            <C.InfoArea>
                <C.BoxTitle>{name}</C.BoxTitle>
                <C.BoxDesc>
                    {description}
                </C.BoxDesc>
                <C.BoxTechs>
                    {techs.map((item, index) => (
                        <C.BoxTech key={index}>
                            <img src={require(`../../assets/icons/techs/${item}_white.png`)} alt="" />
                        </C.BoxTech>
                    ))}
                </C.BoxTechs>
                <C.ButtonArea className='buttonArea'>
                    <Button 
                        isALink={true}
                        link={links.github}
                        title='GitHub'
                        icon='github'
                        buttonSmall={true}
                    />
                    <Button 
                        isALink={true}
                        link={links.page}
                        title='Acessar'
                        icon='paper'
                        buttonSmall={true}
                    />
                </C.ButtonArea>
            </C.InfoArea>
        </C.Container>
    );
}