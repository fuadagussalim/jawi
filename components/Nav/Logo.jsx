import Image from "next/image";
function Logo() {
    return (
        <div className="flex w-fit items-center justify-center gap-2">
           <Image
            src="./public/LOGO-JAWI-PNG.png"
           />
            <div className="font-bold">Jawi</div>
        </div>
    );
}