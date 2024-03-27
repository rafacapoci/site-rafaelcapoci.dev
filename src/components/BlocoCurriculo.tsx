import Link from "next/link";

type BlocoExperienciaProps = {
    numero: string;
    titulo: string;
    link: string;
    texto: string;
}

export default function BlocoCurriculo({numero, titulo, link, texto}: BlocoExperienciaProps) {
    return (
        <div className="mb-20">
            <p className="text-lg mb-2">{numero}</p>
            <p className="mb-8 text-2xl font-semibold">{titulo}</p>
            <Link target="_blank" className="text-lg outline outline-1 outline-white p-4 rounded-lg" href={link ? link : "#"}>
                {texto}
            </Link>
        </div>
    );
}