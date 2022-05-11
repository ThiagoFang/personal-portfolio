import * as C from './styles'

import { useNavigate } from 'react-router-dom'

type Props = {
    isALink: boolean,
    icon: string
    title: string,
    link?: string,
    path?: string,
    buttonSmall?: boolean
}

export const Button = ({ isALink, icon, title, link, path, buttonSmall }: Props) => {
    const navigate = useNavigate();

    const openWindow = (link: any) => {
        window.open(`${link}`, "_blank");
    };

    const goTo = (path: any) => {
        window.scrollTo({top: 0, behavior: "smooth"});
        setTimeout(()=>{
            navigate(`/${path}`);
        }, 200)
    };

    return(
        <C.ButtonArea buttonSmall={buttonSmall} onClick={() => isALink ? openWindow(link) : goTo(path)}>
            <C.Icon buttonSmall={buttonSmall} src={require(`../../assets/icons/${icon}_white.png`)} />
            <C.Title buttonSmall={buttonSmall}>{title}</C.Title>
        </C.ButtonArea>
    );
}