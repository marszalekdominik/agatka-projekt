import Link from "next/link";
import { Product } from "./page";

export default function ProductView({ product }: { product: Product }) {
    const { step, title, link } = product;
    return (
        <div className="flex flex-row flex-1 mb-2.5">
            <p className="flex-1 font-semibold pl-2 pr-5">{step}</p>
            <Link href={link} target="_blank" className="flex-2 underline pr-2">
                <span>{title}</span>
            </Link>
        </div>
        // <div className="flex flex-col w-full">
        //     <h3 className="bg-[var(--color-secondary)] text-center font-semibold my-2">{product.step}</h3>
        //     <Link href={product.link} target="_blank" className="underline p-2">{product.title}</Link>
        // </div>
    )
}