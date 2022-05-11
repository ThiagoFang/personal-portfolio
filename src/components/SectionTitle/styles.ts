import styled from "styled-components";

export const TitleBox = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: var(--main-color);
    margin: 0;
    font-size: 32px;

    @media (max-width: 425px) {
        font-size: 28px;
    }
`;

export const SubTitle = styled.h3`
    text-transform: uppercase;
    color: var(--font-subcolor);
    margin: 0;

`;