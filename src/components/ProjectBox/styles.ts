import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 350px;
    background-color: var(--gray-background-color);
    border: 1px solid var(--border-color);
    border-radius: 30px;
    box-shadow: 0 5px 20px #000;
    transition: .3s;
    overflow-x: hidden;

    &:hover{
        height: 430px;
        transform: scale(1.03);

        .buttonArea{
            top: 0;
        }
    }

    @media(max-width: 768px) {
        width: 300px;
    }
    @media(max-width: 425px) {
        width: 280px;
    }
`;

export const ImageArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    overflow: hidden;
    
    img{
        width: 100%;
    }
`;

export const InfoArea = styled.div`
    padding: 0 20px;
    overflow: hidden;
`;

export const BoxTitle = styled.h3`
    margin: 10px 0;
    font-size: 24px;
    color: var(--font-color);
`;

export const BoxDesc = styled.div`
    color: var(--font-subcolor);
    font-size: 16px;
`;

export const BoxTechs = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const BoxTech = styled.li`
    width: 25px;
    margin-right: 10px;
    img {
        width: 100%;
    }
`;

export const ButtonArea = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    transition: .5s;
`;