export default function Colaboration() { 
    return (
        <section className="flex flex-col items-center justify-center bg-[var(--color-primary)] text-white py-7 px-6">
                <h2 className="font-family-montserrat text-3xl mb-7">Współpraca</h2>
                <p className="section-text">Jeśli jesteś zainteresowany współpracą, skontaktuj się ze mną.</p>
                <a href="mailto:agata.stan.collabs@gmail.com"
                className=""
                aria-label="Napisz do mnie w sprawie współpracy">
                    <span className="">agata.stan.collabs@gmail.com</span>
                </a>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/agata.stan/" 
                        className="" 
                        rel="noopener noreferrer"
                        aria-label="Odwiedź mój profil na Instagramie"><i className="bi bi-instagram" aria-hidden="true"></i></a>
                    <a href="https://www.tiktok.com/@agata.stan" 
                    className="" 
                    rel="noopener noreferrer"
                    aria-label="Odwiedź mój profil na TikToku"><i className="bi bi-tiktok" aria-hidden="true"></i></a>    
                </div>
        </section>
    )
}