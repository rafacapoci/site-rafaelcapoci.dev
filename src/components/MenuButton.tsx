'use client';

import { useState } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";
import MenuItem from "./MenuItem";

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onScroll={() => setIsOpen(false)} onScrollCapture={() => setIsOpen(false)}>

            <button className="ml-6 p-2 text-2xl" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <RiCloseFill /> : <RiMenu2Fill /> }
            </button>

            <div className="w-auto fixed mt-8 ml-3">
                <div className={isOpen ? 'bg-black/95 w-auto h-auto rounded-lg transition-all duration-300' : 'invisible w-0 h-auto'}>
                    <div className="flex text-center justify-center overflow-hidden">
                        <ul className="text-lg mx-2">
                            <MenuItem onClick={() => setIsOpen(!isOpen)} titulo={"Experiencias"} link="#experiencia" />
                            <MenuItem onClick={() => setIsOpen(!isOpen)} titulo={"Formação Academica"} link={"#formacao"} />
                            <MenuItem onClick={() => setIsOpen(!isOpen)} titulo={"Curriculo Completo"} link={"#curriculo"} />
                            <MenuItem onClick={() => setIsOpen(!isOpen)} titulo={"Github"} link={"https://github.com/rafacapoci"} target="_blank" />
                            <MenuItem onClick={() => setIsOpen(!isOpen)} titulo={"LinkedIn"} link={"https://www.linkedin.com/in/rafacapoci/"} target="_blank" />
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}