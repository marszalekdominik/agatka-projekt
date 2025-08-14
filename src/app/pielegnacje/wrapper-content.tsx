"use client";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { skincarePlans } from "./page";
import { useAnalytics } from "../components/lib/hooks/useAnalytics";

export default function WrapperContent() {
    const { trackButtonClick } = useAnalytics();
    return (
        <div className="w-full">
            <Link onClick={() => trackButtonClick('wrapper-content-konsultacje-pielegnacyjne', 'Konsultacje pielęgnacyjne')} href="/pielegnacje/spersonalizowany-plan-pielegnacyjny" className="font-family-montserrat bg-[var(--color-secondary)] border border-[var(--color-primary)] p-8 text-[1.4rem] w-full mb-5 flex rounded-md font-medium underline">Konsultacje pielęgnacyjne</Link>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="plany-pielegnacyjne" className="border-none mb-5">
                    <AccordionTrigger className="bg-transparent border border-[var(--color-primary)] p-8 text-[1.4rem] font-family-montserrat">Konkretne plany pielęgnacyjne</AccordionTrigger>
                    <AccordionContent className="p-4">
                        <ul>
                        {Object.values(skincarePlans).map((plan) => (
                            <li key={plan.title}><Link onClick={() => trackButtonClick('plan-pielegnacyjne', plan.title)} href={`/pielegnacje/${plan.link}`} className="block w-full text-[1rem] pb-1 underline">{plan.title}</Link></li>
                        ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}