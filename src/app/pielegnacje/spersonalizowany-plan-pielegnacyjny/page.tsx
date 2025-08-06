import HeroBanner from "@/app/components/HeroBaner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
    return [
        {
            slug: "konsultacje-pielenacyjne",
        }
    ]
}

export default function SpersonalizowanyPlanPielenacyjny() { 
    return (
        <>
            <HeroBanner />
            <Link href="/pielegnacje" className="flex items-center">
                <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-family-montserrat text-3xl my-7 text-center">Konsultacje pielęgnacyjne</h2>
                <p className="text-center mb-5 leading-[1.6]  px-5">Dostępne plany pielęgnacyjne nie są dla Ciebie wystarczające ? Jeśli potrzebujesz czegoś w 100% dopasowanego do Twoich potrzeb zapraszam na konsultacje pielęgnacyjne. Ułożę dla Ciebie całkowicie spersonalizowaną pielęgnację w założonym przez Ciebie budżecie. Skupimy się na skutecznym rozwiązaniu Twoich problemów.</p>
                <p className="font-semibold bg-[var(--color-quaternary)] text-white p-2 w-full text-center mb-5 font-family-montserrat text-[1.1rem]">Jak będzie wyglądać współpraca?</p>
                <p className="mb-5 leading-[1.6] text-center px-5">Poproszę Cię o podesłanie mi na maila Twojej aktualnej rutyny pielęgnacyjnej. (będę potrzebowała rutyny wieczornej oraz porannej i spisu konkretnych kosmetyków które stosujesz). Następnie zrobię przegląd kosmetyków by wyeliminować te, które nie służą Twojej cerze. Jeśli niektóre kosmetyki będą w porządku to zostawię je w Twojej rutynie, byś nie musiał/a kupować zbyt wielu produktów na raz. Tutaj kolejny ważny punkt, czyli Twój budżet, który chcesz przeznaczyć na całą pielęgnację, oraz ile maksymalnie chcesz przeznaczyć na jeden kosmetyk. Będę starała się dopasować kosmetyki tak, by zmieścić się w przedstawionych przez Ciebie widełkach. (Zaproponuję również droższe opcje, jeśli po czasie miał(a)byś ochotę na produkty przeznaczyć więcej). Plan pielęgnacyjny zostanie wysłany na Twojego maila.</p>
                <p className="mb-5 leading-[1.6] text-center px-5">Będziesz miał(a) możliwość stałego mailowego kontaktu ze mną przez 30 dni od otrzymania spersonalizowanego planu pielęgnacyjnego. Wtedy będziemy mogli wprowadzić ewentualne modyfikacje do planu, biorąc pod uwagę Twoje wrażania na temat zaleconych przeze mnie produktów.</p>
                <p className="mb-5 leading-[1.6] text-center px-5">Jeśli jesteś zainteresowany/a spersonalizowanym planem pielęgnacyjnym napisz do mnie na: <a className="font-bold font-family-montserrat" href="mailto:mail@mail.com"></a></p>
                <p className="mb-5 leading-[1.6] text-center px-5">Następnie poproszę Cię o wykonanie przelewu, a po jego zaksięgowaniu zadam Ci mailowo kilka pytań, by jak najlepiej poznać potrzeby Twojej skóry. Po otrzymaniu odpowiedzi zacznę pracę nad Twoim spersonalizowanym planem. Czas oczekiwania na plan pielęgnacyjny to maksymalnie 7 dni roboczych od otrzymania maila z odpowiedziami na temat Twojej skóry.</p>
                <p className="font-semibold bg-[var(--color-quaternary)] text-white p-2 w-full text-center mb-5 font-family-montserrat text-[1.1rem]">Cena konsultacji pielęgnacyjnej to 99 zł.</p>
            </div>
        </>
    )
}