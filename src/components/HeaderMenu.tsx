import MenuButton from "./MenuButton";

export default function HeaderMenu() {
    return(
        <div className="flex justify-between w-full h-20 items-center bg-purple-800 text-white">
            <div>
                <MenuButton />
            </div>
            <div className="text-2xl font-bold mr-8">
                rafaelcapoci.dev
            </div>
        </div>
    );
}