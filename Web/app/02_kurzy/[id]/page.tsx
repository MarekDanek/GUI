export default async function CourseDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="bg-white p-8 rounded-3xl border shadow-sm">
      <span className="text-blue-600 font-mono font-bold uppercase tracking-widest text-sm">Detail předmětu</span>
      <h1 className="text-4xl font-black mt-2 uppercase">{id}</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        Zde by se zobrazovaly podrobnosti o kurzu {id}. Next.js automaticky vytáhl toto ID z adresního řádku.
      </p>
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-800 text-sm">
        💡 <strong>Tip pro studenty:</strong> Toto je dynamická routa. Zkuste v URL změnit `{id}` na cokoli jiného!
      </div>
    </div>
  );
}