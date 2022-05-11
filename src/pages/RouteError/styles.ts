import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    
    img{
        width: 600px;
    }
    .title{
        font-weight: bold;
        margin: 10px 0;
        font-size: 32px;
    }
    .back-button{
        font-weight: bold;
        color: var(--background-color);
        padding: 12px 30px;
        margin: 10px 0;
        font-size: 20px;
        background-color: var(--main-color);
        border-radius: 15px;
        transition: .4s;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }
    }

    @media(max-width:425px) {
        text-align: center;
        img{
            width: 300px;
        }
    }

`;