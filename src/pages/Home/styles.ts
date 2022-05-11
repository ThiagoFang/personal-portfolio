import styled from "styled-components";

export const BannerArea = styled.section`
    height: calc(100vh - 100px);
    background-image: url(${require('../../assets/images/background1.jpg')});
    background-position: center;
    background-size: cover;
`;

export const BannerGradient = styled.div`
    background: linear-gradient(180deg, rgba(20, 20, 20, 0.55) -33.75%, #0A0A0A 81.6%);
    height: 100%;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    max-width: 1300px;
    margin: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;

    @media (max-width: 1024px) {
        width: 50%;
    }

    
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        
    }
`;

export const TextArea = styled.div`

    .sub-text{
        color: var(--main-color);
        text-transform: uppercase;
        font-size: 22px;
    }
    .main-text{
        font-size: 64px;
        text-transform: uppercase;
        font-weight: bold;
    }

    @media (max-width: 1024px) {
        padding: 0px 20px;

        .sub-text{
            font-size: 18px;
        }
        .main-text{
            font-size: 48px;
        }
    }

    @media (max-width: 425px) {
        .sub-text{
            text-align: center;
        }
        .main-text{
            font-size: 36px;
        }
    }
`;
export const ButtonArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const ImageArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
    }

    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileImage = styled.img`
    display: none;

    @media (max-width: 768px) {
        width: 50%;
        display: block;
    }

    @media (max-width: 425px) {
        width: 80%;
    }
`;