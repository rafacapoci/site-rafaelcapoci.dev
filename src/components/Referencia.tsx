import Image from "next/image";
import LogoEcode from '@/../public/logo-ecode.png';

export default function Referencia() {
    return (
        <div className="text-black px-8 pt-20 pb-20 outline-dashed outline-black/50 outline-1">
            <p className="text-3xl font-bold mb-4">Ainda não está convencido?</p>
            <p className="mb-8 text-lg">Converse com quem já teve a experiencia de trabalhar comigo!</p>
            <div>
                <Image src={LogoEcode} alt={"Logo Ecode"} width={200} />
            </div>
            <p className="text-lg">(44) 3624-3639</p>
        </div>
    );
}