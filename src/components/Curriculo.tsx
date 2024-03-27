import BlocoCurriculo from "./BlocoCurriculo";

export default function Curriculo() {
    return(
        <>
            <div id="curriculo" className="bg-purple-800 text-white p-8 pt-20">
                <p className="text-3xl font-bold mb-4 lg:text-center lg:text-5xl">Curriculo e Contato</p>
                <p className="text-lg mb-28 lg:text-2xl lg:text-center">Obrigado por chegar até aqui. Ansioso para que possamos trabalhar juntos!</p>

                <div className="lg:flex lg:gap-56 lg:justify-center">
                    <BlocoCurriculo
                        numero={"01."}
                        titulo={"Front-end"}
                        link={"https://docs.google.com/document/d/1RBlCX4p00PalIf9PvBgTkNTra23CvsMOsq-XWoo3nDY/edit?usp=drive_link"}
                        texto={"Google Drive"}
                    />
                    <BlocoCurriculo
                        numero={"02."}
                        titulo={"Demais vagas"}
                        link={"https://drive.google.com/file/d/12zSPIDRYYvN2LxKfiLKTrTqBG7pS5mC4/view?usp=sharing"}
                        texto={"Google Drive"}
                    />
                </div>
            </div>
            <div className="text-center p-8 bg-purple-800 text-white outline-dashed outline-1 outline-white">
                <p>Desenvolvido por Rafael Capoci</p>
                <p>2024</p>
            </div>
        </>
    );
}