import { TEACHERS } from '../data/mock_data';

export default function TeachersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Naši učitelé</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TEACHERS.map(t => (
          <div key={t.id} className="p-5 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-2">{t.icon}</div>
            <h2 className="font-bold text-lg">{t.name}</h2>
            <p className="text-slate-500">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}