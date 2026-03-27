// app/api/kurzy/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Simulace databáze
  const kurzy = [
    { id: 'web1', nazev: 'Základy HTML/CSS', kapacita: 30 },
    { id: 'nextjs', nazev: 'Framework Next.js', kapacita: 15 }
  ];

  // Vrátí čistý JSON
  return NextResponse.json(kurzy);
}