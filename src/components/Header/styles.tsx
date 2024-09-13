import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: center;
    background-color: #2e2e2e; 
    z-index: 1000;
    gap: 10rem; 
    padding: 1rem

    border-bottom: 5px solid #6743a5;

    
    h1 { 
        text-align: initial;
        color: white;
        border-bottom: 5px solid #6743a5;
        border-left: 5px solid #7345d6;
        padding: 10px

    }
    

    nav {
        display: flex;
        align-items: center;
        
            ul {
                display: flex;
                
                gap: 3rem;
                list-style: none;

                li {
                    display: flex;
                    flex-direction: center;
                    align-items: center;

                    a:hover {
                        color: #6743a5;
                        font-weight: 700;
                    }

                    a.active {
                        color: #6743a5;
                    }
                }


            .botao {
                background-color: #2e2e2e;
                color: white;
                padding: 10px 40px;
                border-radius: 10px;
                border-top: 3px solid #7345d6;
                border-left: 3px solid #7345d6;
                border-right: 3px solid #6743a5;
                border-bottom: 3px solid #6743a5;

                &:hover {
                    background-color: #7345d6;
                    color: white;
                }
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        display: block;
        max-width: 1024px;


        
        
        h1 { 
        text-align: center;
        color: white;
        border: none;
        padding: 10px
    }

    }


    @media (max-width: 768px) {
        max-width: 768px;    
        width: 100%;
        display: none;
        margin-top: ;
    }
`
