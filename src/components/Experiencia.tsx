import BlocoExperiencia from "./BlocoExperiencia";
import TituloBloco from "./TituloBloco";

export default function Experiencia() {
    return(
        <div id="experiencia" className="bg-purple-800/80 text-white p-8 pt-20 lg:pt-48 lg:h-svh">
            <TituloBloco titulo={"Experiencia Profissional"} />
            <div className="lg:inline-flex lg:w-full lg:justify-evenly">
                <BlocoExperiencia 
                    numero={"01."} 
                    titulo={"Front-end"} 
                    texto={"Como front-end, pude trabalhar com diversas técnologias de ponta como Next.js¹ (Framework react), TypeScript² e Tailwind³ (CSS). Todas estão sendo utilizadas nesse site!"} 
                />
                <BlocoExperiencia 
                    numero={"02."} 
                    titulo={"Back-end"} 
                    texto={"Já em minha experiencia como back-end, trabalhei com Laravel⁴ para criação de tabelas, PHP⁵, DBeaver⁶ e Postgress⁷."} 
                />
            </div>
            <div className="lg:inline-flex lg:w-full lg:justify-evenly">
                <BlocoExperiencia 
                    numero={"03."} 
                    titulo={"DevOps"} 
                    texto={"DevOps é minha mais experiencia mais recente, 6 meses. Nesse periodo pude trabalhar com AWS⁸ criando, configurando e gerenciando instancias EC2⁹, grupos de segurança¹⁰ e roles IAM¹¹. Para tornar esse site disponivel utilizei deste conhecimento!"} 
                />
                <BlocoExperiencia 
                    numero={"04."} 
                    titulo={"Outras"} 
                    texto={"Além das já citadas, possuo ampla experiencia com Linux¹², CLI (linha comando), utilizando a mais de dez anos e GitHub para versionamento de código. Também possuo experiencia reservando um registro¹³ (rafaelcapoci.dev) e configurando o mesmo para acesso seguro e disponibilidade mundial."} 
                />
            </div>
        </div>
    );
}