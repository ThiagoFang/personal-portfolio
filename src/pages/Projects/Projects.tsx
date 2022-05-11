import { useState, useEffect } from 'react';

import { ProjectsType, ProjectsInfo } from '../../data/Projects';
import { SectionTitle } from '../../components/SectionTitle';
import { mySkills, Skill } from '../../data/skills';
import * as C from './styles';
import { ProjectBox } from '../../components/ProjectBox';


export const Projects = () => {
    const [skillsList, setSkillsList] = useState<Skill[]>([])
    
    const [projectsList, setProjectsList] = useState<ProjectsType[]>([])

    useEffect(() => setSkillsList(mySkills),[])
    useEffect(() => setProjectsList(ProjectsInfo),[])


    const handleFilterSearchList = (item: Skill, index: number) => {
        const newList = [...skillsList]
        newList[index].active = !newList[index].active
        setSkillsList(newList)
    }

    return(
        <C.Container>
            <SectionTitle title='HABILIDADES' subtitle='Skills' />
            <C.SkillsArea>
                {skillsList.map((item, index)=>(
                    <C.ItemBox onClick={() => handleFilterSearchList(item, index)} active={item.active} key={index}>
                        <img src={require(`../../assets/icons/techs/${item.name}_white.png`)} alt="" />
                    </C.ItemBox>
                ))}
            </C.SkillsArea>
            <C.ProjectsArea>
                {projectsList.length == 0 && 
                    <div>Nada  ser exibido aqui</div>
                }
                {projectsList.map((item, index) => (
                    <ProjectBox 
                        key={index}
                        name={item.name}
                        description={item.description}
                        url={item.url}
                        links={item.links}
                        techs={item.techs}
                    />
                ))}
            </C.ProjectsArea>
        </C.Container>
    );
}