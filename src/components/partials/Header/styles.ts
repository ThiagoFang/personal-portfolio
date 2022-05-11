import styled from "styled-components";

export const HeaderArea = styled.header`
    background-color: var(--gray-background-color);
    border-bottom: 1px solid var(--border-color);
    height: 100px;
    width: 100vw;
    overflow: hidden;
`;

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;
    max-width: 1100px;
    margin: auto;
`;

export const LogoArea = styled.div`
    cursor: pointer;
    img{
        width: 120px;
    }
`;

export const LinksList = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 425px) {
        display: none;
    }
`;

export const LinkItem = styled.li<{active: boolean}>`
    font-size: 18px;
    margin: 0 10px;
    padding: 37px 5px;
    cursor: pointer;
    border-bottom: 2px solid var(${props => props.active ? '--sub-main-color' : "--transparent"});
    color: var(${props => props.active ? '#--font-color' : '--font-subcolor'});
    transition: .1s;

    &:hover{
        color: var(--font-color);
        border-bottom: 2px solid var(--sub-main-color);
    }
`;



// MENU MOBILE
export const MobileMenuButton = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 35px;
    height: 35px;

    .menu--button{
        width: 100%;
        height: 100%;
        color: var(--sub-main-color);
    }

    @media (max-width: 425px) {
        display: flex;
    }
`;

export const MobileMenu = styled.aside<{menuStatus: boolean}>`
    display: none;
    position: fixed;
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
    padding-top: 70px;
    transition: .5s;

    .close--button{
        position: relative;
        color: var(--main-color);
        left: 350px;
        bottom: 40px;
        width: 30px;
        height: 30px;

        @media (max-width: 375px) {
            left: 300px
        }

        @media (max-width: 320px) {
            left: 270px
        }
    }

    @media (max-width: 425px) {
        display: block;
        margin-left: ${props => props.menuStatus ? 0 : '100vw'};
    }
`;

export const MobileMenuLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const MobileMenuLink = styled.li`
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;
