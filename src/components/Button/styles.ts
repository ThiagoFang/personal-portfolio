import styled from "styled-components"; 

export const ButtonArea = styled.a<{buttonSmall?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => props.buttonSmall ? '2px' : '3px'} solid var(--sub-main-color);
    width: ${props => props.buttonSmall ? '150px' : '200px'};
    padding: 7px 5px;
    border-radius: 10px;
    cursor: pointer;
    margin: 5px 10px;
    transition: .2s;

    &:hover{
        transform: scale(1.01);
        box-shadow: 0 0 10px var(--sub-main-color);
    }
`;

export const Icon = styled.img<{buttonSmall?: boolean}>`
    width: ${props => props.buttonSmall ? '15px' : '30px'};
    margin-right: 10px;
`;

export const Title = styled.div<{buttonSmall?: boolean}>`
    font-size: ${props => props.buttonSmall ? '16px' : '20px'};
    font-weight: bold;
`;