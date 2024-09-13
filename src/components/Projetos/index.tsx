// import { useEffect, useState } from "react"

import { ProjetosEstilo } from "./styles";

export const Projetos = () => {
    // interface Repository {
    //     id: number;
    //     name: string;
    //     language: string;
    //     html_url: string;
    // }

    // const [repos, setRepos] = useState<Repository[]>([])


    // useEffect(() => {
    //     fetch('https://api.github.com/users/Khai221/repos')
    //     .then(response => response.json())
    //     .then(data => {
    //         setRepos(data)
    //         console.log(data)
    //     })
    //     .catch(error => console.error('Erro ao buscar repositórios:', error))
    // }, [])

    return (
        <ProjetosEstilo id="secao3">
            <div>
                <h2>Principais projetos</h2>
            </div>
            <div>
                <ul className="lista">
                    <li>
                        <div>
                            <h3>Clone Disney+</h3>
                            <a target="_blank" href="https://clone-disney-plus-pink.vercel.app/"><img src="src\assets\imagem disney.png" alt="" /></a>
                            <a target="_blank" href="https://github.com/Khai221/clone_disney_plus">Clique para ver no Github</a>
                            <p>Projeto de réplica site da Disney+, durante meus estudos na EBAC. Desenvolvido com JavaScript, HTML, CSS usando o pre-processador SASS com gulp pra automatizar, minificar as imagens e comprimir os arquivos.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Restaurante</h3>
                            <a target="_blank" href="https://restaurante-projeto-ebac.vercel.app/"><img src="src\assets\imagem restaurante.png" alt="" /></a>
                            <a target="_blank" href="https://github.com/Khai221/restaurante-projeto-ebac">Clique para ver no Github</a>
                            <p>Bootstrap, HTML, CSS.</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div>
            <ul className="lista">
                {repos.map((repository) => (
                    <li key={repository.id}>
                        <div>
                            <b>Nome do projeto</b> 
                            <p>{repository.name}</p>
                        </div>
                        <div>
                            <p>Linguagem usada</p>
                            <p>{repository.language}</p>
                        </div>
                        <div>
                            <a href={repository.html_url}>Visite no Github</a>
                        </div>
                    </li>
                ))}
            </ul>
            </div> */}
        </ProjetosEstilo>
    )
}