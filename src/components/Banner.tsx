export default function Banner() {
    return (
        <div className="w-full h-dvh bg-purple-800 pt-36">
            <p className="font-bold text-4xl text-white max-w-48 ml-8 mb-20">
                Desenvolvedor Full-Stack e DevOps.
            </p>
            <p className="text-white max-w-56 ml-8 text-lg pb-24">
                Site desenvolvido inteiramente por mim. Pensado em mobile first então para uma melhor experiencia, visualize por um Smartphone.
            </p>
            <div className="inline-flex text-white/50 font-bold text-1xl flex-wrap justify-center m-8">
                <p className="px-3">AWS</p>
                <p className="px-3">EC2</p>
                <p className="px-3">DevOps</p>
                <p className="px-3">Bucket</p>
                <p className="px-3">CSS</p>
                <p className="px-3">TypeScript</p>
                <p className="px-3">Tailwind</p>
                <p className="px-3">HTML</p>
                <p className="px-3">Laravel</p>
                <p className="px-3">GitHub</p>
            </div>
        </div>
    );
}