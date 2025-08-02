import Image from "next/image";

export default function HeroBanner() { 
    return (
        <div className="relative h-[600px]">
            <Image src="/agatka.jpg" alt="Agata Stan" fill={true} className="object-cover"/>
        </div>
    )
}