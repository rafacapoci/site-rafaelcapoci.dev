type TituloBlocoProp = {
    titulo: string
}

export default function TituloBloco({ titulo }: TituloBlocoProp) {
    return <p className="text-3xl font-bold mb-24 lg:text-center lg:text-5xl"> { titulo } </p>
}