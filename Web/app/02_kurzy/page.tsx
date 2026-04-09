// app/02_kurzy/page.tsx
import Link from 'next/link';
import { COURSES } from '../data/mock_data';

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ hledat?: string }>;
}) {
  const params = await searchParams;
  const dotaz = params.hledat?.toLowerCase() || '';

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
            <div>
              <span className="font-bold block">{course.title}</span>
              <span className="text-sm text-slate-500">Kreditů: {course.credits}</span>
            </div>
            <Link href={`/02_kurzy/${course.id}`} className="text-blue-600 hover:underline">
              Detail
            </Link>
          </li>
        ))}
      </ul>

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