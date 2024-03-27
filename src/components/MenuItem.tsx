import Link from "next/link";
import { MouseEventHandler } from "react";

type MenuItemProps = {
    titulo: string;
    link: string;
    target?: string;
    onClick?: MouseEventHandler;
}

export default function MenuItem({ titulo, link, target, onClick }: MenuItemProps) {
    return (
        <li className="px-6 py-2 my-2">
            <Link href={link} onClick={onClick} target={target}>{titulo}</Link>
        </li>
    );
}