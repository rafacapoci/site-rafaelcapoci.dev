type BlocoExperienciaProps = {
    titulo: string;
    texto: string;
}

export default function BlocoFormacao({titulo, texto}: BlocoExperienciaProps) {
    return (
        <div className="my-5 ml-1 mr-5 min-w-80">
            <div className="outline outline-1 outline-black p-4 rounded-lg h-56">
                <p className="mb-4 text-2xl font-semibold">{titulo}</p>
                <div className="text-lg">
                    {texto}
                </div>
            </div>
        </div>
    );
}