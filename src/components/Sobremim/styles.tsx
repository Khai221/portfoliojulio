import styled from "styled-components";

export const SobremimEstilo = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    h2 {
        font-weight: 700;
        color: #fff;
        border-bottom: 3px solid #7345d6;
        margin-left: 2rem;
    }
    
    p {
        font-weight: 700;
        color: #FFF;
        margin-left: 2rem;
    }

    span {
        color: #7345d6;
        font-weight: 700;
    }

    .tecnologias__titulo {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        margin-top: 4rem;
        gap: 1rem;
        font-weight: 700;
        color: #fff;
        border-bottom: 3px solid #7345d6;

        svg {
            color: #7345d6;
        }
    }

    .tecnologias {
        display: block;
        margin-top: 2rem;

        margin-left: 3rem;
        margin-top: 2rem;


        p {
            font-weight: 700;
            margin-left: 2rem;
            color: #fff;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            color: #fff;

            li {
            list-style: none;
            background-color: #7345d6;
            border-radius: 5px;
            padding: 0.2rem;
            border: 2px solid #6743a5;
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
        padding: 0 1rem;
        margin-left: 0;

        .tecnologias {
            margin-left: 0;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
        padding: 0 1rem;

        h2 {
            margin-left: 0;
        }

        p {
            margin-left: 0;
        }

        .tecnologias {
            margin-left: 0;
        }
    }
`