// app/02_kurzy/page.tsx
import Link from 'next/link';

// V Next.js 15 musíme parametry "awaitnout" (TypeScript to vyžaduje)
export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ hledat?: string }>;
}) {
  // Přečteme si, co uživatel napsal do URL (např. ?hledat=react)
  const params = await searchParams;
  const dotaz = params.hledat?.toLowerCase() || '';

  const COURSES = [
    { id: 'web1', title: 'Základy HTML/CSS', credits: 4 },
    { id: 'js-adv', title: 'JavaScript pro experty', credits: 6 },
    { id: 'nextjs', title: 'Framework Next.js', credits: 5 },
  ];

  // Vyfiltrujeme kurzy podle URL (SSR v akci!)
  const vyfiltrovane = COURSES.filter(c => c.title.toLowerCase().includes(dotaz));

  return (
    <div className="max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Katalog kurzů</h1>
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
          ⚡ SSR Renderováno
        </span>
      </div>

      <ul className="divide-y divide-slate-200 border rounded-xl bg-white">
        {vyfiltrovane.map((course) => (
          <li key={course.id} className="p-4 flex justify-between items-center">
            <span className="font-bold">{course.title}</span>
            <Link href={`/02_kurzy/${course.id}`} className="text-blue-600 hover:underline">
              Detail
            </Link>
          </li>
        ))}
      </ul>

      {/* Odkaz, který nasimuluje hledání a spustí SSR */}
      <div className="mt-6 flex gap-2">
        <Link href="/02_kurzy?hledat=javascript" className="text-sm border p-2 rounded hover:bg-slate-50">
          🔍 Hledat JavaScript
        </Link>
        <Link href="/02_kurzy" className="text-sm border p-2 rounded hover:bg-slate-50 text-red-600">
          ✖ Zrušit filtr
        </Link>
      </div>
    </div>
  );
}