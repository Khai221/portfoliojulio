import { SobremimEstilo } from "./styles"

export const Sobremim = () => {
    return (
        <SobremimEstilo id="secao2" className="secao">
            <div>
                <h2>
                    Sobre Mim
                </h2>
                <p>
                    Atualmente trabalho como <span>freelancer</span> e ex-professor estagiário de tecnologia na escola Erasmo Braga, sou 
                    estudante de Análise e Desenvolvimento de Sistemas na UNINTER e Engenheiro Front-End na Escola britânica de 
                    artes criativas & tecnologia - EBAC.
                    Durante minha experiência como professor de tecnologia, desenvolvi um forte senso de <span>determinação</span> para 
                    superar desafios e aprimorei minha <span>empatia</span>, adaptando-me às necessidades individuais dos alunos.
                    Meus estudos são focados na parte de <span>Front-End</span> (Web), me aprimorando cada vez mais para me tornar um 
                    desenvolvedor Fullstack.
                </p>
            </div>
            <div className="tecnologias">
                <div className="tecnologias__titulo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>                    
                <h3>TECNOLOGIAS QUE USO NO MEU DIA</h3>
                </div>
                <div>
                    <p>Linguagems, frameworks e bibliotecas</p>
                    <nav>
                        <ul>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>Jquery</li>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Redux</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p>Pre-processadores CSS</p>
                    <nav>
                        <ul>
                            <li>SASS</li>
                            <li>LESS</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p>Versionamento de código</p>
                    <nav>
                        <ul>
                            <li>GIT</li>
                            <li>GitHub</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </SobremimEstilo>
    )
}