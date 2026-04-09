import Link from 'next/link';
import { COURSES } from '../data/mock_data';

export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ hledat?: string }> }) {
  // 1. Přečteme parametr z URL (SSR)
  const hledat = (await searchParams).hledat?.toLowerCase() || '';

  // 2. Vyfiltrujeme data
  const kurzy = COURSES.filter(c => c.title.toLowerCase().includes(hledat));

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Katalog kurzů (SSR)</h1>

      <div className="flex gap-2 mb-4">
        <Link href="/02_kurzy?hledat=javascript" className="bg-blue-100 text-blue-800 px-3 py-1 rounded">🔍 Hledat JS</Link>
        <Link href="/02_kurzy" className="bg-slate-200 px-3 py-1 rounded">✖ Zrušit filtr</Link>
      </div>

      <ul className="bg-white rounded-xl shadow-sm border divide-y">
        {kurzy.map(k => (
          <li key={k.id} className="p-4 flex justify-between">
            <span className="font-bold">{k.title}</span>
            <Link href={`/02_kurzy/${k.id}`} className="text-blue-600 hover:underline">Detail</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}