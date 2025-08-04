import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Product } from "./page";

export default function ProductView({ product }: { product: Product }) {
    const { step, title, link } = product;
    return (
        <>
            <h3>{product.step}</h3>
            <Link href={product.link} target="_blank">
                <span>{product.title}</span><FontAwesomeIcon icon={faExternalLink} />
            </Link>
        </>
    )
}