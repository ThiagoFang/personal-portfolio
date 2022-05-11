import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: auto;
    padding: 50px 0;
`;

export const SkillsArea = styled.div`
    display: flex;
    padding: 20px 70px;
    border-radius: 60px;
    background-color: var(--gray-background-color);
    border: 1px solid var(--border-color);
    box-shadow: 0 0 20px #000;
    margin-bottom: 50px;

    @media(max-width: 425px) {
        padding: 15px 10px;
        margin-bottom: 0;
    }
`;

export const ItemBox = styled.div<{active: boolean}>`
    width: 40px;
    height: 40px;
    margin: 0 15px;
    opacity: ${props => props.active ? 1 : .1};
    cursor: pointer;
    transition: .2s;

    img{
        width: 100%;
    }

    @media(max-width: 425px) {
        width: 25px;
        height: 25px;
        margin: 0 10px
    }
`;

export const ProjectsArea = styled.div`
    display: grid;
    grid-row-gap: 50px;
    grid-column-gap: 100px;
    grid-template-columns: repeat(3, 1fr);
    margin: 50px 0;

    @media(max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 50px;
    }
    @media(max-width: 768px) {
        grid-column-gap: 30px;
    }
    @media(max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;