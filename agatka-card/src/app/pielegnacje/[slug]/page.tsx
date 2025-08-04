import { useRouter } from "next/navigation";
import { skincarePlans } from "../page";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "@/app/components/HeroBaner";
import ProductView from "../ProductView";

export default async function Pielegnacje({
    params,
  }: {
    params: Promise<{ slug: string }>
  })  {
    const { slug } = await params;
    const plan = skincarePlans[slug as keyof typeof skincarePlans];
    return (
        <div className="mt-5">
            <HeroBanner />
            <Link href="/pielegnacje" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-family-montserrat text-3xl mb-7 ">{plan.title}</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p>{plan.description}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>Rano</h2>
                <ul>
                    {plan.dayProducts.map((product) => (
                        <ProductView key={product.title} product={product} />
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2>Wieczór</h2>
                <ul>
                    {plan.nightProducts.map((product) => (
                        <ProductView key={product.title} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    )
}