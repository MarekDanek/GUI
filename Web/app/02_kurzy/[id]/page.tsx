// app/02_kurzy/[id]/page.tsx
import { COURSES } from '../../data/mock_data';

export default async function CourseDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Najdeme konkrétní kurz podle ID z URL
  const course = COURSES.find(c => c.id === id);

  return (
    <div className="bg-white p-8 rounded-3xl border shadow-sm max-w-2xl">
      <span className="text-blue-600 font-mono font-bold uppercase tracking-widest text-sm">Detail předmětu</span>

      {/* Pokud kurz existuje, vypíšeme jeho reálný název, jinak jen ID */}
      <h1 className="text-4xl font-black mt-2">{course ? course.title : id.toUpperCase()}</h1>

      <p className="mt-6 text-slate-600 leading-relaxed">
        {course ? course.desc : `Zde by se zobrazovaly podrobnosti o kurzu ${id}. Next.js automaticky vytáhl toto ID z adresního řádku.`}
      </p>

      {course && (
        <div className="mt-6 flex gap-4">
          <span className="bg-slate-100 px-4 py-2 rounded-lg font-bold">Kreditů: {course.credits}</span>
          <span className="bg-slate-100 px-4 py-2 rounded-lg font-bold">Kapacita: {course.enrolled}/{course.capacity}</span>
        </div>
      )}

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm">
        💡 <strong>Tip pro studenty:</strong> Toto je dynamická routa. Zkuste v URL změnit <code>{id}</code> na cokoli jiného!
      </div>
    </div>
  );
}