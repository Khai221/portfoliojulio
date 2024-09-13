import { LinkEstilo } from "../Texto/styles";
import { TituloEstilo } from "../Texto/styles";
import { HeaderContainer } from "./styles";
import { LiEstilo } from "../Texto/styles";

interface HeaderProps {
    activeSection: string;
}

export const Header: React.FC<HeaderProps> = ( { activeSection } ) => {
    return (
        <HeaderContainer>
            <TituloEstilo><span>Júlio</span> Narciso</TituloEstilo>
            <nav>
                <ul>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'inicio' ? 'active' : ''} href="#secao1">Inicio</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'sobre' ? 'active' : ''} href="#secao2">Sobre mim</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'projetos' ? 'active' : ''} href="#secao3">Projetos</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'contato' ? 'active' : ''} href="#secao4">Contato</LinkEstilo>
                    </LiEstilo>
                    <li>
                        <LinkEstilo target="_blank" className="botao" href="https://drive.google.com/uc?export=download&id=1s8MLKyg9i7IG5ThraGBgnqHFZk2B4ab9" download="Curriculo_Julio_Narciso.pdf">Currículo</LinkEstilo>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}