import styled from 'styled-components';

export const ContatoEstilo = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 15rem;
    margin-bottom: 8rem;
    height: 50vh;

    .roxin {
        color: #7345d6;


    }


    svg {
        color: #7345d6;
        padding: 1rem;

        &:hover {
            color: #FFF;
            border-bottom: 5px solid #7345d6;
            }

        }

    h1 {
        font-weight: 700;
        color: #fff;
        border-bottom: 3px solid #7345d6;
        margin-left: 2rem;
        margin-bottom: 2rem;
    }
    
    p {
        font-weight: 700;
        color: #FFF;
        margin-left: 2rem;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
        margin-left: 2rem;
    }

    @media (max-width: 768px) {

        h1 {
            margin-left: 0;
        }
        p {
            margin-left: 0;
        }
        div {
            margin-left: 0;
            align-items: center;
            display: flex;
    }
`