// app/01_ucitele/page.tsx
import { TEACHERS } from '../data/mock_data';

export default function TeachersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black text-slate-900">Katedra Webových Technologií</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEACHERS.map((teacher) => (
          <div key={teacher.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4">
              {teacher.icon}
            </div>
            <h2 className="text-xl font-bold">{teacher.name}</h2>
            <p className="text-slate-500">{teacher.role}</p>
            <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm">
              <span className="text-blue-600 font-medium">{teacher.email}</span>
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">
                {teacher.dept}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}