import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react'

import * as C from "./styles";
import logoImage from "../../../assets/logo.png"

import { HiMenuAlt2 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";


export const Header = ( ) => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const [mobileStatus, setMobileStatus] = useState(false);


    const handleNavigateTo = (path: string) => {
        window.scrollTo({top: 0, behavior: "smooth"});
        setTimeout(()=>{
            navigate(`/${path}`);
        }, 200)
        setMobileStatus(false)
    }

    const handleChangeMenuStatus = () => {
        setMobileStatus(!mobileStatus)
    }

    return(
        <C.HeaderArea>
            <C.MobileMenu menuStatus={mobileStatus}>
                <CgClose className="close--button" onClick={handleChangeMenuStatus}/>
                <C.MobileMenuLinks>
                    <C.MobileMenuLink onClick={() => handleNavigateTo('')}>
                        Home
                    </C.MobileMenuLink>
                    <C.MobileMenuLink onClick={() => handleNavigateTo('projects')}>
                        Projetos
                    </C.MobileMenuLink>
                </C.MobileMenuLinks>
            </C.MobileMenu>
            <C.Container>
                <C.LogoArea onClick={() => handleNavigateTo('')}>
                    <img src={logoImage} />
                </C.LogoArea>
                <C.MobileMenuButton onClick={handleChangeMenuStatus}>
                    <HiMenuAlt2 className="menu--button" />
                </C.MobileMenuButton>
                <C.LinksList>
                    <C.LinkItem active={location === '/' ? true : false} onClick={() => handleNavigateTo('')} >
                        Home
                    </C.LinkItem>
                    <C.LinkItem active={location === '/projects' ? true : false} onClick={() => handleNavigateTo('projects')} >
                        Projetos
                    </C.LinkItem>
                </C.LinksList>
            </C.Container> 
        </C.HeaderArea>
    );
}