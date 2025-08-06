import { skincarePlans } from "../page";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "@/app/components/HeroBaner";
import ProductView from "../ProductView";

export async function generateStaticParams() {
    return Object.keys(skincarePlans).map((slug) => ({
        slug: slug,
    }));
}

export default async function Pielegnacje({
    params,
  }: {
    params: Promise<{ slug: string }>
  })  {
    const { slug } = await params;
    const plan = skincarePlans[slug as keyof typeof skincarePlans];
    return (
        <>
            <HeroBanner />
            <Link href="/pielegnacje" className="flex items-center">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <div className="flex flex-col items-center justify-center mt-5">
                <h2 className="font-family-montserrat text-3xl mb-7 text-center">{plan.title}</h2>
            </div>
            <div className="flex flex-col items-center justify-center px-5 text-center">
                <p>{plan.description}</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-[1.4rem] font-family-montserrat font-semibold mb-5 bg-[var(--color-quaternary)] w-full text-white text-center">Rano</h2>
                <ul className="w-full">
                    {plan.dayProducts.map((product) => (
                        <ProductView key={product.title} product={product} />
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-[1.4rem] font-family-montserrat font-semibold mb-5 bg-[var(--color-primary)] w-full text-white text-center">Wieczór</h2>
                <ul className="w-full">
                    {plan.nightProducts.map((product) => (
                        <ProductView key={product.title} product={product} />
                    ))}
                </ul>
            </div>
        </>
    )
}