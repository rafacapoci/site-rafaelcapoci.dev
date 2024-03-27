type BlocoExperienciaProps = {
    titulo: string;
    texto: string;
}

export default function BlocoFormacao({titulo, texto}: BlocoExperienciaProps) {
    return (
        <div className="my-5 ml-1 mr-5 min-w-80 lg:min-w-96">
            <div className="outline outline-1 outline-black p-4 rounded-lg h-56 lg:h-72">
                <p className="mb-4 text-2xl lg:text-3xl font-semibold">{titulo}</p>
                <div className="text-lg lg:text-2xl">
                    {texto}
                </div>
            </div>
        </div>
    );
}