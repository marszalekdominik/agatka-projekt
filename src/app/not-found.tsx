'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  // You can use searchParams here if needed
  return null;
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-family-montserrat mb-4">Nie znaleziono strony</h2>
      <p className="mb-6 text-gray-600">Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <SearchParamsComponent />
      </Suspense>
      <Link 
        href="/" 
        className="bg-[var(--color-quaternary)] text-white px-6 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Wróć do strony głównej
      </Link>
    </div>
  );
}
