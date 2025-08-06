import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Colaboration() { 
    return (
        <section className="flex flex-col items-center justify-center bg-[var(--color-primary)] text-white py-7 px-6">
                <h2 className="font-family-montserrat text-3xl mb-6">Współpraca</h2>
                <p className="section-text">Jeśli jesteś zainteresowany współpracą, skontaktuj się ze mną.</p>
                <a href="mailto:agata.stan.collabs@gmail.com"
                    className="font-family-montserrat text-xl font-semibold text-[var(--color-secondary)] mt-5"
                    aria-label="Napisz do mnie w sprawie współpracy">
                    <span className="">agata.stan.collabs@gmail.com</span>
                </a>
                <div className="flex gap-4 mt-5">
                    <a href="https://www.instagram.com/agata.stan/" 
                        className="text-4xl" 
                        rel="noopener noreferrer"
                        aria-label="Odwiedź mój profil na Instagramie">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    <a href="https://www.tiktok.com/@agata.stan" 
                    className="text-4xl" 
                    rel="noopener noreferrer"
                    aria-label="Odwiedź mój profil na TikToku">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>    
                </div>
        </section>
    )
}