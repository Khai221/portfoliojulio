import styled from "styled-components";

export const InicioEstilo = styled.section`
    display: grid;
    grid-template-columns: 10% 1fr 1fr;
    gap: 6rem;
    height: 55vh;
    margin-left: 2rem;
    color: #fff;
    width: 100%;

    margin-top: 10rem;

    .border_bottom {
        border-bottom: 2px solid #fff;
    }

    h2 {
        margin-left: 1rem;
    }
    
    .primeiro-paragrafo {
        margin-left: 1rem;
        font-weight: bold;
    }

    a {
        color: black;

        &:visited {
            color: black;
        }
    }
    
    .icones {
        display: inline-flex;
        flex-direction: column;
        width: 100%;
        margin-top: 2.5rem;
        gap: 1rem;

        .icones_1, .icones_2, .icones_3 {
        color: #7345d6;
        font-weight: bold;
        font-size: 1.5rem;
        position: relative;
        display: inline-block; 
        transition: color 0.3s, font-size 0.3s;
    }

    .icones_1::after, .icones_2::after, .icones_3::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #7345d6;
        transform: scaleX(0); 
        transition: transform 0.3s; 
    }

    .icones_1:hover::after, .icones_2:hover::after, .icones_3:hover::after {
        transform: scaleX(1);
    }

    .icones_1:hover, .icones_2:hover, .icones_3:hover {
        color: #fff;
        font-size: 2rem;
    }
        
    }

    .biografia {
        width: 90%;
        text-align: start; 
    }

    img {
        border-radius: 50%;
        border: 6px solid #7345d6;
    }
    .avatar {
        width: 220px;
        height: 220px;
        background: url('https://media.licdn.com/dms/image/v2/D5603AQF1PpEBOLGicQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704422733211?e=1731542400&v=beta&t=W1Ia38EdCEnIwPQM0XY89ewhWbeZwtVa5_lVtQ3zSWg');
        background-size: cover;
        border-radius: 50%;
        position: relative;
        animation: deform 7s infinite;
}

@keyframes deform {
     0% {
        border-radius: 50%;
    }
    50% {
        border-radius: 20%;
    }
    100% {
        border-radius: 50%;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    width: 90vw;
    margin-top: 15rem;
    margin-left: 0;
    margin-bottom: -10rem;



}

@media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100vw;
    margin-top: 2rem;
    text-align: center;
    gap: 1rem;
    height: 100vh;
    margin-left: 0;
    


    .icones {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin-top: 2.5rem;
        gap: 1rem;
        margin-bottom: -5rem;
        }

    .biografia {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;

    .segundo-paragrafo {
        text-align: center;
    }
        .avatar {
            width: 150px;
            height: 150px;
        }
    }
`