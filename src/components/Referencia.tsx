import Image from "next/image";
import LogoEcode from '@/../public/logo-ecode.png';

export default function Referencia() {
    return (
        <div className="text-black px-8 pt-20 lg:pt-48 pb-20 lg:pb-48 outline-dashed outline-black/50 outline-1 lg:text-center">
            <p className="text-3xl lg:text-5xl font-bold mb-4">Ainda não está convencido?</p>
            <p className="mb-28 text-lg lg:text-2xl">Converse com quem já teve a experiencia de trabalhar comigo!</p>
            <div className="lg:flex lg:justify-center">
                <Image src={LogoEcode} alt={"Logo Ecode"} width={200} />
            </div>
            <p className="text-lg">(44) 3624-3639</p>
        </div>
    );
}