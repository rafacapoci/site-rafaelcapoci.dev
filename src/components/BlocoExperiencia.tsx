type BlocoExperienciaProps = {
    numero: string;
    titulo: string;
    texto: string;
}

export default function BlocoExperiencia({numero, titulo, texto}: BlocoExperienciaProps) {
    return (
        <div className="mb-20 lg:mb-32 lg:max-w-2xl">
            <p className="text-lg lg:text-2xl mb-2">{numero}</p>
            <p className="mb-4 lg:mb-12 text-2xl lg:text-5xl font-semibold">{titulo}</p>
            <div className="text-lg lg:text-2xl">
                {texto}
            </div>
        </div>
    );
}