"use client";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center justify-center py-7 px-6">
                <h2 className="font-family-montserrat text-3xl mb-6">O mnie</h2>
                <p className="text-center leading-[1.7] mb-4">Od 16 lat z ciekawością i zaangażowaniem zgłębiam, czym naprawdę jest skuteczna pielęgnacja skóry.</p>
                <p className="text-center leading-[1.7] mb-4">Wierzę, że świadoma pielęgnacja to nie tylko sposób na wygląd, ale przede wszystkim wyraz troski o siebie i swoje samopoczucie.</p>
                <p className="text-center leading-[1.7] mb-4">Dziś swoją wiedzę przekładam na praktykę, oferując <Link className="underline font-bold" href="/pielegnacje/spersonalizowany-plan-pielegnacyjny">indywidualne konsultacje pielęgnacyjne</Link>, które pomagają dobrać skuteczną, spersonalizowaną rutynę pielęgnacyjną, dostosowaną do Twoich potrzeb.</p>
        </section>
    )
}