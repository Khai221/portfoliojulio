import styled from "styled-components"

export const ProjetosEstilo = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 10rem;

    span {
        color: #7345d6;
        font-weight: 700;
    }

    h2 {
        font-weight: 700;
        color: #fff;
        border-bottom: 3px solid #7345d6;
        margin-left: 2rem;
    }
    
    
    .lista {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        list-style: none;
        text-align: center;


        h3 {
            text-align: center;
            color: #fff;
            font-weight: 700;
            
        }

        a {
        text-decoration: none;
        color: #bfab93;
        cursor: pointer;

        img {
            max-width: 500px;
            width: 100%;
            border-radius: 20px
            }
        }

        p {
            color: #fff;
        }
        
    }

    @media (max-width: 768px) {
    margin-left: 0;
        
    h2 {
        margin-left: 0;
    }


        .lista {
            grid-template-columns: 1fr;
            max-width: 767px;
            margin-right: 2rem;
            
            img {
            max-width: 200px;
            width: 100%;
            border-radius: 20px
            }
        }
        
    }

` 