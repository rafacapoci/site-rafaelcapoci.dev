type BlocoExperienciaProps = {
    numero: string;
    titulo: string;
    texto: string;
}

export default function BlocoExperiencia({numero, titulo, texto}: BlocoExperienciaProps) {
    return (
        <div className="mb-20">
            <p className="text-lg mb-2">{numero}</p>
            <p className="mb-4 text-2xl font-semibold">{titulo}</p>
            <div className="text-lg">
                {texto}
            </div>
        </div>
    );
}