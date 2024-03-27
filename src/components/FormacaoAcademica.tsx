import BlocoFormacao from "./BlocoFormacao";

export default function FormacaoAcademica() {
    return(
        <div id="formacao" className="text-black px-8 pt-20 pb-20 bg-black/10">
            <p className="text-3xl font-bold mb-8">Formação Academica</p>
            <div className="flex flex-row overflow-scroll">
                <BlocoFormacao 
                    titulo={"IFPR - Tecnologia da Informação"} 
                    texto={"Iniciado no ano de 2017, não cheguei a concluir este curso pois prestei vestibular e passei para iniciar no ano seguinte."} 
                />
                <BlocoFormacao 
                    titulo={"IFPR - HTML + CSS"} 
                    texto={"Com esse curso aprendi a base e os fundamentos do desenvolvimento web."} 
                />
                <BlocoFormacao 
                    titulo={"IFPR - HTML + Bootstrap"} 
                    texto={"Com esse curso tive meu primeiro contato com um framework CSS que tem por finalidade facilitar a utilização do mesmo."} 
                />
                <BlocoFormacao 
                    titulo={"IFPR - Tecnologo em Analise e Desenvolvimento de Sistemas"} 
                    texto={"Com inicio em 2018 e conclusão em 2021."}
                />
            </div>
        </div>
    );
}