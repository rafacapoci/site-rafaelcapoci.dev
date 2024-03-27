const tecnologias = [
    { name: "AWS" },
    { name: "EC2" },
    { name: "DevOps" },
    { name: "Bucket" },
    { name: "CSS" },
    { name: "TypeScript" },
    { name: "Tailwind" },
    { name: "HTML" },
    { name: "Laravel" },
    { name: "GitHub" },
];

export default function Banner() {
    return (
        <div className="w-full h-dvh bg-purple-800">
            <div className="pt-36 lg:pt-80 lg:flex lg:flex-row lg:justify-evenly lg:mb-80">
                <p className="font-bold text-4xl lg:text-9xl text-white max-w-48 lg:max-w-5xl ml-8 mb-20">
                    Desenvolvedor Full-Stack e DevOps.
                </p>
                <p className="text-white max-w-56 ml-8 text-lg lg:text-3xl lg:max-w-xl lg:ml-14 lg:mr-8 lg:self-end pb-24">
                    Site desenvolvido inteiramente por mim. Pensado em mobile first então para uma melhor experiencia, visualize por um Smartphone.
                </p>
                
            </div>
            <div className="inline-flex text-white/50 font-bold text-xl lg:text-4xl flex-wrap justify-center m-8 lg:w-full lg:m-0">
                {tecnologias.map((item, key) => (
                    <p key={ key } className="px-3">{ item.name }</p>
                ))}
            </div>
        </div>
    );
}