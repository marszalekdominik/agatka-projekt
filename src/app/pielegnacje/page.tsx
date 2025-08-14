
import HeroBanner from "../components/HeroBaner";
import WrapperContent from "./wrapper-content";


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
    'pielegnacja-wspomagajaca-skore-tradzikowa': {
        title: "Pielęgnacja wspomagająca skórę trądzikową",
        link: "pielegnacja-wspomagajaca-skore-tradzikowa",
        description: "W tej pielęgnacji skupiłam się na działaniu przeciwzaskównikowych poprzez kwasy takie jak salicylowy czy azelainowy, które połączyłam z nawilżeniem, koniecznym do poprawnego funkcjonowania skóry trądzikowej. Chciałam jednak mocno zaznaczyć, że trądzik jest chorobą skóry i w większości przypadków sama pielęgnacja nie wystarczy by poprawić całkowicie stan skóry. Zachęcam was do wybrania się na wizytę do dermatologa w celu omówienia leczenia. Wszystkie przedstawione poniżej przedstawione kosmetyki testowałam osobiście. Zamieszczone linki są linkami afiliacyjnymi, które przeniosą was do konkretnych produktów na drogerii Cosibella.",  
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
    'pielegnacja-na-przebarwienia-po-wypryskach': {
        title: "Pielęgnacja na przebarwienia po wypryskach",
        link: "pielegnacja-na-przebarwienia-po-wypryskach",
        description: "W tej pielęgnacji skupiłam się na działaniu łagodzącym oraz rozjaśniającym między innymi poprzez składniki takie jak azeloglicyna, kwas tranwksamowy i niacynamid. Wszystkie przedstawione poniżej przedstawione kosmetyki testowałam osobiście. Zamieszczone linki są linkami afiliacyjnymi, które przeniosą was do konkretnych produktów na drogerii Cosibella. ",
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
    'pielegnacja-przeciwzmarszczkowa': {
        title: "Pielęgnacja przeciwzmarszczkowa",
        link: "pielegnacja-przeciwzmarszczkowa",
        description: "W tej pielęgnacji połączyłam działanie przeciwzmarszczkowym retinolu, peptydów i DMAE razem z poranną antyoksydacją. Wszystkie przedstawione poniżej przedstawione kosmetyki testowałam osobiście. Zamieszczone linki są linkami afiliacyjnymi, które przeniosą was do konkretnych produktów na drogerii Cosibella.",
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
    'pielegnacja-regenerujaca': {
        title: "Pielęgnacja regenerująca",
        link: "pielegnacja-regenerujaca",
        description: "W tej pielęgnacji postawiłam na warstwowość produktów, by jak najbardziej odżywić i nawilżyć skórę. Kluczowe składniki w tej pielęgnacji to ceramidy, fermenty czy wąkrota azjatycka. Wszystkie przedstawione poniżej przedstawione kosmetyki testowałam osobiście. Zamieszczone linki są linkami afiliacyjnymi, które przeniosą was do konkretnych produktów na drogerii Cosibella.",
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
}

export default function Pielegnacje() { 
    return (
        <>
            <HeroBanner />
            <div className="flex flex-col items-center justify-center px-5">
                <h2 className="font-family-montserrat text-3xl my-7 ">Plany Pielęgnacyjne</h2>
                <WrapperContent />
            </div>
        </>
    )
}