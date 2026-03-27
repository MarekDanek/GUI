import Link from 'next/link';

const COURSES = [
  { id: 'web1', title: 'Základy HTML/CSS', credits: 4 },
  { id: 'js-adv', title: 'JavaScript pro experty', credits: 6 },
  { id: 'nextjs', title: 'Framework Next.js', credits: 5 },
];

export default function CoursesPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Seznam kurzů</h1>
      <ul className="divide-y divide-slate-200 border rounded-xl overflow-hidden bg-white">
        {COURSES.map((course) => (
          <li key={course.id} className="p-4 hover:bg-slate-50 flex justify-between items-center">
            <div>
              <span className="font-bold text-blue-700">{course.id.toUpperCase()}</span>
              <h2 className="text-lg">{course.title}</h2>
            </div>
            <Link
              href={`/02_kurzy/${course.id}`}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm"
            >
              Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}