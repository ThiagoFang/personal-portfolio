import styled from "styled-components";

export const Container = styled.section`
    padding: 40px 0px 80px 0px;
    max-width: 1200px;
    margin: auto;

    @media (max-width: 425px) {
        padding: 40px 10px;
    }
`;

export const AboutArea = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const AboutPhoto = styled.div`
    flex: 1;
`;

export const PhotoArea = styled.div`
    height: 500px;
    border-radius: 30px;
    background-image: url(${require('../../assets/images/im.jpg')});
    background-size: cover;
    background-position: center;
    border: 1px solid var(--border-color);
    box-shadow: 0 0 15px #000;
    margin-right: 10px;

    @media (max-width: 768px) {
        height: 300px;
        width: 350px;
        margin: 0 0 30px 0;
    }

    @media (max-width: 425px) {
        width: 280px;
        height: 250px;
    }
`;

export const InfoArea = styled.div`
    width: 63%;
    margin-left: 30px;

    @media (max-width: 1024px) {
        width: 55%;
        margin-left: 15px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
    @media (max-width: 425px) {
        padding: 0;
        margin-left: 0;
    }
`;

export const SquaresArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
        gap: 20px;
    }

    @media (max-width: 425px) {
        gap: 10px;
    }
`;

export const Square = styled.div`
    border-radius: 15px;
    text-align: center;
    padding: 30px 10px;
    background-color: var(--gray-background-color);
    box-shadow: 0 0 10px #000;
    border: 1px solid var(--border-color);

    @media (max-width: 1024px) {
        padding: 15px 0;
    }

    @media (max-width: 425px) {
        padding: 15px 0;
    }
`;

export const SquareIcon = styled.img`
    width: 35px;
    margin-bottom: 10px;

    @media (max-width: 425px) {
        width: 25px;
        margin-bottom: 5px;
    }
`;

export const SquareTitle = styled.div`
    font-size: 18px;
    margin: 5px 0;
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 16px;
    }
`;

export const SquareSubTitle = styled.div`
    color: var(--font-subcolor);

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

export const AboutText = styled.div`
    line-height: 23px;

    span {
        color: var(--sub-main-color);
        font-weight: 500;
    }

    @media (max-width: 1024px) {
        font-size: 15px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const ButtonsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
`;