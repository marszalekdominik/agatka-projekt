import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import HeroBanner from "../components/HeroBaner";

export type Product = {
    step: string;
    title: string;
    link: string;
}

export type SkincarePlan = { 
    [key: string]: {
        title: string;
        link: string;
        description: string;
        dayProducts: Product[];
        nightProducts: Product[];
    }
};

export const skincarePlans: SkincarePlan = {
    'pielegnacja-na-przebarwienia-po-wypryskach': {
        title: "Pielęgnacja na przebarwienia po wypryskach",
        link: "pielegnacja-na-przebarwienia-po-wypryskach",
        description: "Pielęgnacja na przebarwienia po wypryskach opis",
        nightProducts: [
            {
                step: "Olejek do demakijażu",
                title: "Mixsoon - Bean Cleansing Oil - 195ml",
                link: "https://go.cosibella.pl/4foaAfJ"
            },
            {
                step: "Żel do mycia twarzy",
                title: "Transparent Lab - Rose Calming Cleanser Ph 5.5 - 150ml",
                link: "https://go.cosibella.pl/4o7F89f"
            },
            {
                step: "Serum",
                title: "Cos De BAHA - TN Tranexamic Acid Niacinamide Serum - 30ml",
                link: "https://go.cosibella.pl/3IPC6GJ"
            },
            {
                step: "Krem",
                title: "SkinTra - Let Your Skin Feed On - 50ml",
                link: "https://go.cosibella.pl/3IIBhzt"
            },
        ],
        dayProducts: [
            {
                step: "Żel do mycia twarzy",
                title: "Transparent Lab - Rose Calming Cleanser Ph 5.5 - 150ml",
                link: "https://go.cosibella.pl/4o7F89f"
            },
            {
                step: "Serum",
                title: "SkinTra - Eraser - 30ml",
                link: "https://go.cosibella.pl/4n7zD9Y"
            },
            {
                step: "SPF",
                title: "CeraVe SPF50 - 52ml",
                link: "https://go.cosibella.pl/45gjKGo"
            },
        ]
    },
    'pielenacja-regenerujaca': {
        title: "Pielęgnacja regenerująca",
        link: "pielenacja-regenerujaca",
        description: "Pielęgnacja na regenerację skóry opis",
        nightProducts: [
            {
                step: "Olejek do demakijażu",
                title: "Mixsoon - Bean Cleansing Oil - 195ml",
                link: "https://go.cosibella.pl/4foaAfJ"
            },
            {
                step: "Żel do mycia twarzy",
                title: "Bioderma - Sensibio Gel Moussant - 500ml",
                link: "https://go.cosibella.pl/41f2ksm"
            },
            {
                step: "Serum",
                title: "Bielenda Professional - Supremelab - Barrier Renew - Hydra-Nourishing Barrier Elixir with NMF Complex - 50ml",
                link: "https://go.cosibella.pl/4lcFKI7"
            },
            {
                step: "Krem",
                title: "SkinTra - Let Your Skin Feed On - 50ml",
                link: "https://go.cosibella.pl/3IIBhzt"
            },
        ],
        dayProducts: [
            {
                step: "Żel do mycia twarzy",
                title: "Bioderma - Sensibio Gel Moussant - 500ml",
                link: "https://go.cosibella.pl/41f2ksm"
            },
            {
                step: "Tonik (tu jako serum)",
                title: "SkinTra - Everything What Your Skin Will Love - 200ml",
                link: "https://go.cosibella.pl/4jYdpV7"
            },
            {
                step: "Krem",
                title: "SkinTra - Let Your Skin Feed On - 50ml",
                link: "https://go.cosibella.pl/3IIBhzt"
            },
            {
                step: "SPF",
                title: "Mixsoon - Centella Sun Cream - SPF50+/PA++++ - 50g",
                link: "https://go.cosibella.pl/4l59lmw"
            },
        ]
    },
    'anti-aging': {
        title: "Pielęgnacja Anti Aging",
        link: "anti-aging",
        description: "Pielęgnacja Anti Aging opis",
        nightProducts: [
            {
                step: "Olejek do demakijażu",
                title: "Mixsoon - Bean Cleansing Oil - 195ml",
                link: "https://go.cosibella.pl/4foaAfJ"
            },
            {
                step: "Żel do mycia twarzy",
                title: "Bioderma - Sensibio Gel Moussant - 500ml",
                link: "https://go.cosibella.pl/41f2ksm"
            },
            {
                step: "Serum",
                title: "SkinTra - Dmaestro - 30ml",
                link: "https://go.cosibella.pl/4kMjc1y"
            },
            {
                step: "Krem",
                title: "Mixsoon - Bean Cream - 50ml",
                link: "https://go.cosibella.pl/3GyRPZL"
            },
        ],
        dayProducts: [
            {
                step: "Żel do mycia twarzy",
                title: "Bioderma - Sensibio Gel Moussant - 500ml",
                link: "https://go.cosibella.pl/41f2ksm"
            },
            {
                step: "Serum",
                title: "Liqpharm - LIQ CC Serum Rich 15% Vitamin C BOOST - 30ml",
                link: "https://go.cosibella.pl/45dz9aa"
            },
            {
                step: "SPF",
                title: "CeraVe SPF50 - 52ml",
                link: "https://go.cosibella.pl/45gjKGo"
            },
        ]
    },
    'pielenacja-wspomagajaca-skore-tradzikowa': {
        title: "Pielęgnacja wspomagająca skórę trądzikową",
        link: "pielenacja-wspomagajaca-skore-tradzikowa",
        description: "Pielęgnacja wspomagająca skórę trądzikową opis",  
        nightProducts: [
            {
                step: "Olejek do demakijażu",
                title: "Mixsoon - Bean Cleansing Oil - 195ml",
                link: "https://go.cosibella.pl/4foaAfJ"
            },
            {
                step: "Żel do mycia twarzy",
                title: "Mixsoon - Centella Cleansing Foam - 150ml",
                link: "https://go.cosibella.pl/4l6bONH"
            },
            {
                step: "Serum",
                title: "SkinTra - Everything What Your Skin Will Love - 200ml",
                link: "https://go.cosibella.pl/4jYdpV7"
            },
            {
                step: "Krem",
                title: "La Roche-Posay - Effaclar H Iso-Biome - 40ml",
                link: "https://go.cosibella.pl/4m0CT6o"
            },
        ],
        dayProducts: [
            {
                step: "Żel do mycia twarzy",
                title: "Mixsoon - Centella Cleansing Foam - 150ml",
                link: "https://go.cosibella.pl/4l6bONH"
            },
            {
                step: "Serum",
                title: "Cos De BAHA - AZ Azelaic Acid 10 Serum - 30ml",
                link: "https://go.cosibella.pl/4flv6xr"
            },
            {
                step: "SPF",
                title: "Missha - All-Around Safe Block Aqua Sun SPF50+/PA++++ - 50ml",
                link: "https://go.cosibella.pl/3H4EHMs"
            },
        ]

    },
}

export default function Pielegnacje() { 
    
    // const skincareProducts = [
    //     {
    //         title: "Sera z witamina C",
    //         link: "/sera-z-witamina-c"
    //     },
    //     {
    //         title: "Sera na przebarwienia",
    //         link: "/sera-na-przebarwienia"
    //     },
    //     {
    //         title: "Kremy z filtrem",
    //         link: "/kremy-z-filtrem"
    //     },
    //     {
    //         title: "Kremy nawilżające",
    //         link: "/kremy-nawilzajace"
    //     },
    //     {
    //         title: "Produkty z kwasami",
    //         link: "/produkty-z-kwasami"
    //     },
    //     {
    //         title: "Produkty oczyszczające",
    //         link: "/produkty-oczyszczajace"
    //     },
    // ]
    return (
        <>
            <HeroBanner />
            <div className="flex flex-col items-center justify-center px-5">
                <h2 className="font-family-montserrat text-3xl my-7 ">Plany Pielęgnacyjne</h2>
                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full font-family-montserrat">
                        {/* <AccordionItem value="plany-pielegnacyjne" className="border-none mb-5">
                            <AccordionTrigger className="bg-[var(--color-secondary)] border border-[var(--color-primary)] p-8 text-[1.4rem]">Spersonalizowane plany pielegnacyjne</AccordionTrigger>
                            <AccordionContent className="p-4">
                                <ul>
                                {Object.values(skincarePlans).map((plan) => (
                                    <li key={plan.title}><Link href={`/pielegnacje/${plan.link}`} className="block w-full">{plan.title}</Link></li>
                                ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem> */}
                        <AccordionItem value="plany-pielegnacyjne" className="border-none mb-5">
                            <AccordionTrigger className="bg-transparent border border-[var(--color-primary)] p-8 text-[1.4rem]">Konkretne plany pielęgnacyjne</AccordionTrigger>
                            <AccordionContent className="p-4">
                                <ul>
                                {Object.values(skincarePlans).map((plan) => (
                                    <li key={plan.title}><Link href={`/pielegnacje/${plan.link}`} className="block w-full">{plan.title}</Link></li>
                                ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        {/* <AccordionItem value="polecane-kosmetyki" className="border-none">
                            <AccordionTrigger className="bg-transparent border border-[var(--color-primary)] p-8 text-[1.4rem]">Konkretne polecane kosmetyki</AccordionTrigger>
                            <AccordionContent className="p-4">
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem> */}
                    </Accordion>
                </div>
            </div>
        </>
    )
}