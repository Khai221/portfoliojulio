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
                        <LinkEstilo className={activeSection === 'secao1' ? 'active' : ''} href="#secao1">Inicio</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'secao2' ? 'active' : ''} href="#secao2">Sobre mim</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'secao3' ? 'active' : ''} href="#secao3">Projetos</LinkEstilo>
                    </LiEstilo>
                    <LiEstilo>
                        <LinkEstilo className={activeSection === 'secao4' ? 'active' : ''} href="#secao4">Contato</LinkEstilo>
                    </LiEstilo>
                    <li>
                        <LinkEstilo target="_blank" className="botao" href="https://drive.google.com/uc?export=download&id=1s8MLKyg9i7IG5ThraGBgnqHFZk2B4ab9" download="Curriculo_Julio_Narciso.pdf">Currículo</LinkEstilo>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}