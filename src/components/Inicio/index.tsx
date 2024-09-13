import { InicioEstilo } from "./styles"
import { LinkEstilo } from "../Texto/styles";



export const Inicio = () => {
    const corRoxaClara= {
        color: "#7345d6",
        fontWeight: 700,
    };


    const combinedStyle = {
        ...corRoxaClara
    }

    return (
        <InicioEstilo id="secao1">
        <div className="icones">
            <LinkEstilo className="icones_1" href="https://github.com/Khai221" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></LinkEstilo>
            <LinkEstilo className="icones_2" href="https://wa.me/5567999435902" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></LinkEstilo>
            <LinkEstilo className="icones_3" href="https://www.linkedin.com/in/julionarciso/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></LinkEstilo>
        </div>
        <div className="biografia">
            <h2><span style={corRoxaClara}>Olá,</span> sou o <span className="border_bottom" style={corRoxaClara}>Júlio</span></h2>
            <p className="primeiro-paragrafo">Desenvolvedor Front-end</p>
            <p className="segundo-paragrafo">Trabalho atualmente como programador <span style={corRoxaClara}>Front-end</span> freelancer e sou <span className="" style={combinedStyle}>ex-professor</span> estagiário de tecnologia na escola Presbiteriana Erasmo Braga</p>
        </div>
        <div>
            <img className="avatar" src="https://media.licdn.com/dms/image/v2/D5603AQF1PpEBOLGicQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704422733211?e=1731542400&v=beta&t=W1Ia38EdCEnIwPQM0XY89ewhWbeZwtVa5_lVtQ3zSWg" alt="" />
        </div>
        </InicioEstilo>
    )
}