export default function TeachersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-black text-slate-900">Katedra Webových Technologií</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vizitka 1 */}
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4">👨‍🏫</div>
          <h2 className="text-xl font-bold">Ing. Jan Novák</h2>
          <p className="text-slate-500">Vedoucí katedry</p>
          <div className="mt-4 pt-4 border-t text-sm text-blue-600 font-medium">novak@uni.cz</div>
        </div>

        {/* Vizitka 2 */}
        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl mb-4">👩‍🏫</div>
          <h2 className="text-xl font-bold">Mgr. Lucie Černá</h2>
          <p className="text-slate-500">Expertka na UI/UX</p>
          <div className="mt-4 pt-4 border-t text-sm text-purple-600 font-medium">cerna@uni.cz</div>
        </div>

        {/* Vizitka 3 (Tady můžeš nechat studenty, ať si dopíší svou) */}
      </div>
    </div>
  );
}